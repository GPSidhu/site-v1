import React from "react";
import {
	PanelContainer,
	Icon,
	CloseIcon,
	PanelWrapper,
	PanelMenu,
	PanelButtonWrapper,
	// PanelRoute,
    PanelLink,
    PanelButtonAnchor
} from "./elements";
import ResumePdf from "../resume/Gurpreet_Singh.pdf";

const Sidepanel = ({ isopen, toggle }) => {
	return (
		<PanelContainer isopen={isopen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<PanelWrapper>
				<PanelMenu>
					<PanelLink to="about" onClick={toggle}>
						About
					</PanelLink>
					<PanelLink to="experience" onClick={toggle}>
						Experience
					</PanelLink>
					<PanelLink to="projects" onClick={toggle}>
						Projects
					</PanelLink>
					<PanelLink to="contact" onClick={toggle}>
						Contact
					</PanelLink>
					<PanelButtonWrapper>
						<PanelButtonAnchor
							className="btn-anchor"
							href={ResumePdf}
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</PanelButtonAnchor>
					</PanelButtonWrapper>
					{/* <PanelButtonWrapper>
                        <PanelRoute to="/blog">
                            Blog
                        </PanelRoute>
                    </PanelButtonWrapper> */}
				</PanelMenu>
			</PanelWrapper>
		</PanelContainer>
	);
};

export default Sidepanel;
