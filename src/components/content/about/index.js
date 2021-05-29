import React from "react";
import styled from "styled-components";
import { SectionContainer, SectionWrapper } from "../../common";

export const Row = styled.div`
	display: grid;
	align-items: flex-start;
	grid-template-areas: "pic info";
	grid-template-columns: 2fr 3fr;

	@media screen and (max-width: 768px) {
		grid-template-areas: "pic" "info";
		grid-template-columns: auto;
		grid-auto-rows: auto 3fr;
	}
`;

export const Avatar = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: pic;
	display: flex;
	justify-content: center;
`;

export const Info = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: info;
	display: flex;
	justify-content: center;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
`;

export const TopLine = styled.p`
	color: ${({ theme }) => theme.main.textPrimary};
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight 600;
    color: ${({ theme }) => theme.main.textSecondary};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${({ theme }) => theme.main.textPrimary};
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
	display: flex;
	justify-content: flex-end;

	@media screen and (max-width: 780px) {
		justify-content: center;
	}
`;

export const Img = styled.img`
	width: 50%;
	border: 2px solid ${({ theme }) => theme.main.borderPrimary};
	border-radius: 50%;
	margin: 0 0 10px 0;
	padding-right: 0;

	@media screen and (max-width: 480px) {
		width: 70%;
	}
`;

function About({ id, topLine, headline, description, img, alt, seq }) {
	return (
		<>
			<SectionContainer seq={seq} id={id} style={{ height: "960px" }}>
				<SectionWrapper>
					<Row>
						<Avatar>
							<ImgWrap>
								<Img src={`/images/${img}`} alt={alt}></Img>
							</ImgWrap>
						</Avatar>
						<Info>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading>{headline}</Heading>
								<Subtitle>{description}</Subtitle>
							</TextWrapper>
						</Info>
					</Row>
				</SectionWrapper>
			</SectionContainer>
		</>
	);
}

export default About;
