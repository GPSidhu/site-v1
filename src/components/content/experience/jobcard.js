import React from "react";
import styled from "styled-components";
import { Card, Collapser, Tooltip } from "../../common";
import { SKILL_ICON_COMP_MAP } from "../../../constants/icons";

const CardContainer = styled.div`
	width: 100%;
	display: inline-grid;
	img {
		height: 32px;
		margin-bottom: 4px;
	}
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.main.colorSecondary};
		cursor: ne-resize;
	}
	.company-info {
		color: ${({ theme }) => theme.main.textPrimary};
	}
	.company-tasks {
		color: ${({ theme }) => theme.main.textSecondary};
	}
`;
const CardHeader = styled.div`
	display: flex;
	border-bottom: 1px solid ${({ theme }) => theme.main.borderPrimary};
`;
const Heading1 = styled.span`
	font-weight: 500;
	color: ${({ theme }) => theme.main.textPrimary};
	font-size: 18px;
	flex: 1;
`;
const Heading2 = styled.span`
	font-weight: bold;
	font-size: 16px;
	color: ${({ theme }) => theme.main.colorSecondary};
	padding-left: 4px;
`;

const SkillsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	border-top: 1px solid ${({ theme }) => theme.main.borderPrimary};
`;
const Skill = styled.span`
	font-size: 24px;
	padding-right: 4px;
	color: ${({color, theme }) => color ? color : theme.main.textPrimary};
`;

const renderCardheader = (job) => (
	<CardHeader>
		<Heading1>{job.designation}</Heading1>
		{job.company && (
			<Heading2>
				<a
					href={job.company.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{job.company && job.company.logo ? (
						<img
							src={`/images/logos/${job.company.logo}`}
							alt={job.company.name}
						></img>
					) : (
						`@${job.company.name}`
					)}
				</a>
			</Heading2>
		)}
	</CardHeader>
);

const renderCardBody = (job) => {
    let expanded = false;
    // to make default state = expanded on mobile devices
	// if (typeof window.innerWidth != "undefined" && window.innerWidth < 480) {
	// 	expanded = true;
	// }
	return (
		<div className="job-card-body">
			{job.company && job.company.about && (
				<div className="company-info">{job.company.about}</div>
			)}
			<Collapser
				expanded={expanded}
				label={`... read more`}
				content={
					<ol className="company-tasks">
						{job.tasks.map((t, i) => (
							<li key={`t_${i}`}>
								{t}
								{job.taskRefs && job.taskRefs[i] && (
									<a
										href={job.taskRefs[i].link}
										target="_blank"
										rel="noopener noreferrer"
									>
										{job.taskRefs[i].label}
									</a>
								)}
							</li>
						))}
					</ol>
				}
			/>
		</div>
	);
};

const renderCardFooter = (job) => (
	<SkillsWrapper>
		{job.technologies.map((t, i) => (
			<Tooltip
				key={`skill_${i}`}
				message={SKILL_ICON_COMP_MAP[t] && SKILL_ICON_COMP_MAP[t].label}
				position={"top"}
			>
				<Skill color={SKILL_ICON_COMP_MAP[t] && SKILL_ICON_COMP_MAP[t].color}>
					{SKILL_ICON_COMP_MAP[t] && SKILL_ICON_COMP_MAP[t].icon}
				</Skill>
			</Tooltip>
		))}
	</SkillsWrapper>
);

function Jobcard({ job }) {
	return (
		<CardContainer>
			<Card header={renderCardheader(job)} footer={renderCardFooter(job)}>
				{renderCardBody(job)}
			</Card>
		</CardContainer>
	);
}

export default Jobcard;
