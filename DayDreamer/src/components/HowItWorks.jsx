

const steps = [
{
number: 1,
title: "Describe Your Vision",
description: "Simply type what you want to see. Be as creative and detailed as you like!"
},
{
number: 2,
title: "Let AI Work Its Magic",
description: "Our advanced AI analyzes your prompt and creates a unique image just for you."
},
{
number: 3,
title: "Download & Share",
description: "Download your artwork in high resolution and share it with the world!"
}
];

const CreateArtSteps = () => {
return (
<section className="steps-section py-5">
<div className="container text-center">
<div className="badge rounded-pill cute-badge mb-3">
<i className="bi bi-lightbulb me-2"></i> How It Works
</div>
<h2 className="fw-bold display-5 mb-5">
Create Art in <span className="text-highlight">3 Simple Steps</span>
</h2>
<div className="row g-4 justify-content-center">
{steps.map((step, index) => (
<div key={index} className="col-md-4">
<div className="step-card p-4 rounded-4 shadow-sm h-100">
<div className="step-circle mx-auto mb-3">{step.number}</div>
<h5 className="fw-bold">{step.title}</h5>
<p className="text-muted small">{step.description}</p>
</div>
</div>
))}
</div>
</div>
</section>
);
};
export default CreateArtSteps;