import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.svg";
import "./navbar.css";

const menuList = [
	{ title: "Home", href: "#home" },
	{ title: "What is GPT3?", href: "#wgpt3" },
	{ title: "Open AI", href: "#possibility" },
	{ title: "Case Studies", href: "#features" },
	{ title: "Library", href: "#blog" },
];

const MenuItem = ({ href, title }) => (
	<p>
		<a href={href}>{title}</a>
	</p>
);

const MenuItems = () => (
	<>
		{menuList.map((item, i) => (
			<MenuItem key={i} {...item} />
		))}
	</>
);

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="gpt3__navbar">
			<div className="gpt3__navbar-links">
				<div className="gpt3__navbar-links_logo">
					<img src={logo} />
				</div>

				<div className="gpt3__navbar-links_container">
					<MenuItems />
				</div>

				<div className="gpt3__navbar-sign">
					<p>Sign in</p>
					<button type="button">Sign up</button>
				</div>
			</div>
			<div className="gpt3__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="gpt3__navbar-menu_container scale-up-center">
						<div className="gpt3__navbar-menu_container-links">
							<MenuItems />
						</div>
						<div className="gpt3__navbar-menu_container-links-sign">
							<p>Sign in</p>
							<button type="button">Sign up</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default Navbar;
