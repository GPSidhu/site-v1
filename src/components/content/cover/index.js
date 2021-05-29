import React from "react";

import {
	CoverContainer,
	CoverBg,
	ImageBg,
	Content,
	Quote,
	Author,
} from "./elements";

const Cover = ({ backgroundImage, quotes }) => {
	return (
		<div>
			<CoverContainer>
				<CoverBg>{backgroundImage && <ImageBg></ImageBg>}</CoverBg>
				<Content>
					{quotes &&
						quotes.map((q, i) => (
							<div key={`q_${i}`}>
								<Quote size={q.size}>{q.text}</Quote>
								<Author size={q.size}>
									<span>{`- ${q.author}`}</span>
								</Author>
							</div>
						))}
				</Content>
				{/* <BtnWrapper>
                    <Button >
                        <ArrowDownward />
                    </Button>
                </BtnWrapper> */}
			</CoverContainer>
		</div>
	);
};

export default Cover;
