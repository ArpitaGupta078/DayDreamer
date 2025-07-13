🎨 DayDreamer: AI-Powered Prompt-to-Image Generator

DayDreamer is a React-based web application that converts your text prompts into beautiful AI-generated images using a Stable Diffusion model.

📁 Project Structure
bash
DayDreamer/
├── backend/
│   ├── app.py                # (Optional) Flask backend – if not using Colab
│   ├── my_model/             # Local model folder (not required when using Colab)
│   └── .env                  # Hugging Face token (optional)
│
├── DayDreamer/               # Frontend (Vite + React)
│   ├── public/
│   ├── src/
│   │   └── components/       # All React components
│   ├── netlify.toml          # Netlify config
│   └── package.json
│
├── .venv/                    # Python virtual environment (optional)
└── README.md                 # This file


🚀 How It Works
Frontend (React + Bootstrap)

User enters a prompt.

A POST request is sent to the Flask backend (hosted temporarily on Google Colab via ngrok).

The backend uses a pre-trained Stable Diffusion model to generate the image and returns it as a base64 string.

Backend (Google Colab + Flask)

Loads the Stable Diffusion model via Hugging Face.

Generates image from prompt.

Returns the image to frontend.


🧠 Google Colab Setup (Backend)
You’ll run the backend on Google Colab every time manually:

1. Open your Colab notebook (Text_To_Image.ipynb)
Paste the following code blocks step-by-step into separate cells:

🔧 Install Required Packages
python

!pip install diffusers transformers accelerate --upgrade
!pip install safetensors

🔐 Login to Hugging Face and Load Model
python

import torch
from diffusers import StableDiffusionPipeline
import matplotlib.pyplot as plt
from huggingface_hub import login

login("your_huggingface_token_here")  # replace with your token

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16,
    use_safetensors=True
).to("cuda")


🚀 Run Flask Server with ngrok
python

from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
import base64
from pyngrok import ngrok

app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=['POST'])
def generate_image():
    prompt = request.json.get("prompt", "")
    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400
    try:
        image = pipe(prompt).images[0]
        buffer = io.BytesIO()
        image.save(buffer, format="PNG")
        image_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')
        return jsonify({"image": f"data:image/png;base64,{image_base64}"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Start Flask server via ngrok

public_url = ngrok.connect(5000)
print("🔗 Public URL:", public_url)
app.run(port=5000)
💡 Copy the generated ngrok URL (e.g., https://1234abcd.ngrok-free.app)

🌐 React Frontend Setup
1. Install and Run Locally
bash

cd DayDreamer/DayDreamer
npm install
npm run dev

3. Update Backend URL
In your ImageGenerator.jsx:

js

const response = await fetch("https://your-ngrok-url.ngrok-free.app/generate", {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt })
});
Replace the URL with the one printed by Colab/ngrok.

📸 Features
🪄 AI image generation using prompts

💾 Save image button

🎨 Cute & animated UI with Bootstrap + custom styles

☁️ Hosted frontend via Netlify

☁️ Deploy Frontend (Optional)
bash

npm install -g netlify-cli
netlify deploy
Follow the prompts and deploy your Vite app.

⚠️ Notes
You must start the Google Colab backend manually every time you use the app.

ngrok URL changes on every run — update the React component with the new one each time.

🙌 Credits
React + Bootstrap + Vite

Stable Diffusion by HuggingFace

Styling inspired by playful pastel UI kits

Built by [Arpita Gupta]








