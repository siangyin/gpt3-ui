import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
	return (
		<div className="gpt3__footer section__padding">
			<div className="gpt3__footer-heading">
				<h1 className="gradient__text">
					Unlock Infinite Possibilities with ChatGPT
				</h1>
			</div>

			<div className="gpt3__footer-btn">
				<p>Contact us</p>
			</div>

			<div className="gpt3__footer-links">
				<div className="gpt3__footer-links_logo">
					<img src={gpt3Logo} alt="gpt3_logo" />
				</div>
				<div className="gpt3__footer-links_div">
					<h4>Social Media</h4>
					<p>Twitter</p>
					<p>Youtube</p>
					<p>Github</p>
					<p>LinkedIn</p>
				</div>
				<div className="gpt3__footer-links_div">
					<h4>Company</h4>
					<p>Terms & Conditions </p>
					<p>Privacy Policy</p>
					<p>Contact</p>
				</div>
				<div className="gpt3__footer-links_div">
					<h4>Get in touch</h4>
					<p>888 Swiss Road, Singapore 888555</p>
					<p>+65-8765-4321</p>
					<p>contact@gpt.com</p>
				</div>
			</div>

			<div className="gpt3__footer-copyright">
				<p>@2024 GPT-3. All Rights Reserved</p>
			</div>
		</div>
	);
};
export default Footer;
