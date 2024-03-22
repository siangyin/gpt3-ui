import people from "../../assets/people.png";
import ai3 from "../../assets/ai3.png";
import "./header.css";

const Header = () => {
	return (
		<div className="gpt3__header section__padding" id="home">
			<div className="gpt3__header-content">
				<h1 className="gradient__text">
					Unlock Infinite Possibilities with ChatGPT AI
				</h1>
				<p>
					Welcome to ChatGPT, where conversations come alive and possibilities
					are endless. Seamlessly integrate our state-of-the-art language model
					into your products and services to revolutionize customer
					interactions, streamline workflows, and drive innovation. From
					intelligent chatbot to personalized content generation, ChatGPT
					unleashes creativity and efficiency like never before. Explore endless
					possibilities with ChatGPT today!
				</p>

				<div className="gpt3__header-content__input">
					<input type="email" placeholder="Your Email Address" />
					<button type="button">Get Started</button>
				</div>

				<div className="gpt3__header-content__people">
					<img src={people} />
					<p>1,600 people requested access a visit in last 24 hours</p>
				</div>
			</div>

			<div className="gpt3__header-image">
				<img src={ai3} />
			</div>
		</div>
	);
};
export default Header;
