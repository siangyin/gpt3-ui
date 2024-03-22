import possibilityImage from "../../assets/possibility.png";
import possibilityImage3 from "../../assets/possibility3.png";
import "./possibility.css";

const Possibility = () => (
	<div className="gpt3__possibility section__padding" id="possibility">
		<div className="gpt3__possibility-image">
			<img src={possibilityImage3} alt="possibility" />
		</div>
		<div className="gpt3__possibility-content">
			<h1 className="gradient__text">
				Empower Your Conversations, <br />
				Unleash Possibilities
			</h1>
			<p>
				A world of endless possibilities by revolutionizing communication. With
				its advanced AI capabilities, we transforms conversations into
				enlightening experiences. From insightful dialogue to creative
				inspiration and practical assistance, we enriches interactions,
				fostering connections and sparking innovation. Join us in shaping the
				future of communication, one conversation at a time.
			</p>
			<h4>Explore the limitless potential with us today</h4>
		</div>
	</div>
);

export default Possibility;
