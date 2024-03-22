import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const featuresList = [
	{
		title: "Communication",
		text: "We offers natural and fluent conversations, enhancing interaction between users and AI systems.",
	},
	{
		title: "Efficiency",
		text: "By automating tasks like customer support and content generation, we streamlines workflows, saving time and resources.",
	},
	{
		title: "Interaction",
		text: "We understands context and user preferences, delivering tailored responses for a more engaging user experience.",
	},
];
const WhatGPT3 = () => {
	return (
		<div className="gpt3__whatgpt3 section__margin" id="wgpt3">
			<div className="gpt3__whatgpt3-heading">
				<p>Explore endless possibilities</p>
				<h1 className="gradient__text">
					Empowering Conversations, Enlightening Experiences
				</h1>
			</div>

			<div className="gpt3__whatgpt3-feature">
				<Feature
					title="What is GPT-3"
					text="We  empowers your applications with the limitless potential of natural language understanding. Our AI-powered platform harnesses the latest advancements in natural language processing to provide you with an unparalleled experience. Whether you're seeking insightful dialogue, creative inspiration, or practical assistance, ChatGPT is here to enrich your interactions and broaden your horizons. Join us in shaping the future of communication, one conversation at a time."
				/>
			</div>

			<div className="gpt3__whatgpt3-container">
				{featuresList.map((item, i) => (
					<Feature key={i} title={item.title} text={item.text} />
				))}
			</div>
		</div>
	);
};
export default WhatGPT3;
