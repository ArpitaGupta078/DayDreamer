

const useCases = [
{
icon: "bi-journal-richtext",
title: "Children's Storybooks",
description: "Create illustrated bedtime stories using your own characters and themes.",
bg: "bg-gradient-purple"
},
{
icon: "bi-controller",
title: "Game Concepts",
description: "Generate concept art for characters, worlds, or quests.",
bg: "bg-gradient-orange"
},
{
icon: "bi-easel2",
title: "Art Inspiration",
description: "Visualize abstract ideas and spark creativity with AI-generated scenes.",
bg: "bg-gradient-teal"
}
];

const UseCases = () => {
return (
<div className="container py-5">
<h2 className="text-center fw-bold mb-5">Use Cases</h2>
<div className="row g-4">
{useCases.map((item, idx) => (
  <div key={idx} className="col-md-4">
	<div className="card shadow-sm border-0 rounded-4 h-100 text-center p-4">
	  <div className={`icon-circle mx-auto mb-3 ${item.bg}`}>
		<i className={`bi ${item.icon} fs-3`}></i>
	  </div>
	  <h5 className="fw-bold mb-2">{item.title}</h5>
	  <p className="text-muted">{item.description}</p>
	</div>
  </div>
))}
</div>
</div>
);
};

export default UseCases;