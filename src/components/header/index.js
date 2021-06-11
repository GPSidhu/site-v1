import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import ResumePdf from "../resume/Gurpreet_Singh.pdf";

import {
	Nav,
	HeaderContainer,
	LinkItem,
	Logo,
	HeaderMenu,
	MenuItem,
	MobileIcon,
	MenuButton,
	MenuButtonLink,
    MenuButtonAnchor,
} from "./elements";

const menuItems = [
	{ id: "about", label: "About", type: "link" },
	{ id: "experience", label: "Experience", type: "link" },
	{ id: "projects", label: "Projects", type: "link" },
	{ id: "contact", label: "Contact", type: "link" },
	{ id: "resume", label: "Resume", type: "pdf", src: ResumePdf },
	// { id: "blog", label: "Blog", type: "button" },
];

const Header = ({ toggle }) => {
	const [scrollNav, setScrollnav] = useState(false);
	const changeNav = () => {
		if (window.scrollY >= 80) setScrollnav(true);
		else setScrollnav(false);
	};
	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav scrollNav={scrollNav}>
					<HeaderContainer>
						<Logo to="/" onClick={toggleHome}>
							GS
						</Logo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<HeaderMenu>
							{menuItems.map((item, index) => {
								if (item.type === "link")
									return (
										<MenuItem key={`menu_item_${index}`}>
											<LinkItem to={item.id}>
												{item.label}
											</LinkItem>
										</MenuItem>
									);

								if (item.type === "button")
									return (
										<MenuButton key={`menu_item_${index}`}>
											<MenuButtonLink to={item.id}>
												{item.label}
											</MenuButtonLink>
										</MenuButton>
									);
								if (item.type === "pdf")
									return (
										<MenuButton key={`menu_item_${index}`}>
												<MenuButtonAnchor
													className="resume-button"
													href={item.src}
													target="_blank"
													rel="noopener noreferrer"
												>
													{item.label}
												</MenuButtonAnchor>
										</MenuButton>
									);
								return [];
							})}
						</HeaderMenu>
					</HeaderContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Header;
