import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresList = [
	{
		title: "Conversational Fluency",
		text: "ChatGPT excels in engaging users in natural and coherent conversations, thanks to its advanced natural language processing capabilities.",
	},
	{
		title: "Contextual Understanding",
		text: "It comprehends context within conversations, allowing for more relevant and personalized responses tailored to the ongoing dialogue.",
	},
	{
		title: "Multi-language Support",
		text: "ChatGPT can understand and generate text in multiple languages, enabling communication with users from diverse linguistic backgrounds.",
	},
	{
		title: "Scalability and Integration",
		text: "It seamlessly integrates into various platforms and applications, handling large volumes of conversations simultaneously, making it suitable for both small-scale and enterprise-level deployments.",
	},
];

const Features = () => (
	<div className="gpt3__features section__padding" id="features">
		<div className="gpt3__features-heading">
			<h1 className="gradient__text">
				The Future is Now and You Just Need to Realize It.
			</h1>
			<p>Step into future today & make it happen.</p>
		</div>
		<div className="gpt3__features-container">
			{featuresList.map((item, i) => (
				<Feature title={item.title} text={item.text} key={item.title + i} />
			))}
		</div>
	</div>
);

export default Features;
