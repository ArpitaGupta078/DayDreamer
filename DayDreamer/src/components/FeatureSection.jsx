

const features = [
{
icon: "📖",
title: "Smart Scene Detection",
description: "Our AI automatically breaks your story into meaningful scenes for perfect illustrations.",
bg: "bg-gradient-purple"
},
{
icon: "✨",
title: "Beautiful Illustrations",
description: "Generate stunning, child-friendly illustrations that bring your stories to life.",
bg: "bg-gradient-teal"
},
{
icon: "🌟",
title: "Easy Sharing",
description: "Download individual scenes or your complete illustrated story to share and enjoy.",
bg: "bg-gradient-orange"
}
];

const FeatureSection = () => {
return (
<div className="container py-5">
<div className="row g-4">
{features.map((feature, idx) => (
<div key={idx} className="col-md-4">
<div className="card shadow-sm border-0 rounded-4 h-100 text-center p-4">
<div className={`icon-circle mx-auto mb-3 ${feature.bg}`}>
<span className="fs-3">{feature.icon}</span>
</div>
<h5 className="fw-bold mb-2">{feature.title}</h5>
<p className="text-muted">{feature.description}</p>
</div>
</div>
))}
</div>
</div>
);
};

export default FeatureSection;