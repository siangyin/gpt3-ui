import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const articlesList = [
	{
		text: "The Future of Human-AI Collaboration in the Workplace",
		date: "Apr 4, 2024",
		imgUrl: blog01,
	},
	{
		text: "Explore the Revolutionizing Patient Care and Medical Assistance",
		date: "Jan 25, 2024",
		imgUrl: blog02,
	},
	{
		text: "A.I. That Drives ChatGPT Will Move Into the Physical World",
		date: "Dec 31, 2023",
		imgUrl: blog03,
	},
	{
		text: "ChatGPT in Education: Revolutionizing Learning Experiences",
		date: "Dec 2, 2023",
		imgUrl: blog04,
	},
	{
		text: "Unleashing Creativity: ChatGPT and Content Generation",
		date: "Sep 16, 2023",
		imgUrl: blog05,
	},
];
const Blog = () => {
	return (
		<div className="gpt3__blog section__padding" id="blog">
			<div className="gpt3__blog-heading">
				<h1 className="gradient__text">
					Breaking News: <br />
					ChatGPT Unveils Advancements in Technology
				</h1>
			</div>
			<div className="gpt3__blog-container">
				<div className="gpt3__blog-container_groupA">
					<Article {...articlesList[0]} />
				</div>
				<div className="gpt3__blog-container_groupB">
					{articlesList.slice(1).map((item, i) => (
						<Article key={i} {...item} />
					))}
				</div>
			</div>
		</div>
	);
};
export default Blog;
