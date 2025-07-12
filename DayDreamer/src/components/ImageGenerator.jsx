import React, { useState } from 'react';

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const creativePrompts = [
    "A mystical forest with glowing mushrooms",
    "Cute cartoon cat astronaut in space",
    "Steampunk city in the clouds",
    "Magical library with floating books",
    "Cyberpunk neon street at night",
    "Whimsical underwater tea party",
    "Fantasy dragon in crystal cave",
    "Vintage robot reading newspaper",
    "Surreal floating islands",
    "Art deco city skyline at sunset"
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setImageUrl('');

    try {
      const response = await fetch("https://ffc3bbeb6c41.ngrok-free.app/generate", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Flask Server Error:", errorText);
        alert(`Failed with status ${response.status}`);
        return;
      }

      const result = await response.json();
      setImageUrl(result.image); // base64 image
    } catch (err) {
      console.error("Network error:", err);
      alert("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-gen-container text-center m-4 shadow-lg p-4 rounded bg-light">
      <h2 className="mb-4 fw-bold text-purple">✨ Create Your Dream Image ✨</h2>

      <div className="mb-3 text-start">
        <p className="fw-medium">Try these creative prompts:</p>
        <div className="d-flex flex-wrap gap-2">
          {creativePrompts.map((example, index) => (
            <button
              key={index}
              className="btn btn-outline-dark btn-sm"
              onClick={() => setPrompt(example)}
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="form-control cute-input shadow-sm"
          placeholder="Describe your vision..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary cute-btn px-4 py-2 shadow-sm"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "🪄 Generate Image"}
      </button>

      {imageUrl && (
        <div className="mt-5">
          <img
            src={imageUrl}
            alt="Generated"
            className="img-fluid rounded shadow-lg border border-3 border-primary mb-3"
          />
          <br />
          <a
            href={imageUrl}
            download={`dream-image-${Date.now()}.png`}
            className="btn btn-success px-4 py-2 shadow-sm"
          >
            💾 Save Image
          </a>
        </div>
      )}
    </div>
  );
}

export default ImageGenerator;
