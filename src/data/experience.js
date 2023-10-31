const data = {
	id: "experience",
	title: "Experience",
	jobs: [
        {
            designation: "Software Engineer II",
            company: {
                name: "Microsoft",
                url: "https://www.microsoft.com/en-in",
                about: "Microsoft is an American multinational tech corporation best known for a variety of business and end-user product offerings ranging from operating system like Windows, productivity application suites like Office 365, XBOX gaming console and so on.",
                logo: "microsoft.png"
            },
            from: "August 2021",
            to: "October 2023",
            location: "Noida",
            tasks: [
                "Worked in the Fluid Framework Experiences team also known as Microsoft Loop providing collaborative and productivity tools as part of the Office Product Group.",
                "Responsible for the collaborative effort involving design and development of the features for higher order components to support 3P Data Integrations like Jira, Trello, Github etc. with Microsoft Loop.",
                "End to end ownership including planning, resolving design ambiguities, development and delivery of some generic and extensible components to be consumed by any other higher order loop components for 3p integrations.",
                "Worked as an individual contributor as well as leading and owning some key sub-features of the bigger 3p Data integration effort following agile methodology.",
                "Developed some feature extensions for the AI Suggested Tasks of the Microsoft Teams meeting notes scenarios of Loop components."
            ],
            technologies: ["reactjs", "typescript", "rest", "javascript", "oauth"]
        },
		{
			designation: "Senior Software Engineer",
			company: {
				name: "Servicenow",
                url: "https://www.servicenow.com/",
                about: "ServiceNow is an American platform-as-a-service provider, which help companies automate their IT operations and manage digital workflows. Apart from help desk, Servicenow offers a variety of enterprise productivity tools like IT Asset management, IT Operations management etc.",
                logo: "servicenow.png"
			},
			from: "July 2018",
			to: "December 2020",
			location: "Hyderabad",
			tasks: [
				"Worked in the On-Call schedule management under core ITSM dev team starting from Madrid till Quebec release of Servicenow.",
				"New York: Enhanced On-Call ui to support custom escalations and worked to integrate Major incident with alert management modules.",
				"Orlando: Worked in a team to develop fully functional calendar component in seismic. Spiked to support MS Teams as a channel for On-call escalations.",
				"Paris: Developed On-Call Live Escalation Tracking(UI). Worked on integrations to get the ability to create incidents in Servicenow via slash commands from Slack.",
				"Quebec: Worked in Project AIR (Automated Incident Response) a lightweight easy to buy/use version of Servicenow for SREs. Apart from leading the effort to modify and redesign on-call features wherever applicable to uptake in AIR, was also responsible for story planning, pointing, code reviews and knowledge transfers regarding On-call management.",
			],
			taskRefs: {
				// add a ref link to end of above task
				2: {
					label: "View",
					link:
						"https://developer.servicenow.com/dev.do#!/reference/now-experience/quebec/now-components/now-calendar/overview",
				},
				3: {
					label: "View",
					link:
						"https://docs.servicenow.com/bundle/paris-it-service-management/page/administer/on-call-scheduling/task/track-escalation-progress-oncall.html",
				},
			},
			achievements: [
				{
					title: "Quarterly Awards 2020 Q3",
					value: "Team Player",
				},
			],
			technologies: ["angularjs", "nodejs", "reactjs", "graphql", "sass"],
		},
		{
			designation: "IT Senior Consultant",
			company: {
				name: "Oracle",
                url: "https://www.oracle.com/in/index.html",
                about: "Oracle is an American billion dollar multinational which develops products ranging from relational databases to enterprise solutions for ERP, finance, human capital management, supply chain management etc.",
                logo: "oracle.png"
			},
			from: "April 2015",
			to: "July 2018",
			location: "Hyderabad",
			tasks: [
				"Designed and developed a generic framework for real time data migration between on-premise and cloud instances while handling consistency and synchronization",
				"Responsible for understanding and writing business rules as per the requirements for project accounting and revenue generation processes as part of migration to cloud",
				"Developed a ui dashboard from scratch using Oracle Apex ad javascript for optimizing and reducing time to manage resources and schedules",
				"Worked on a variety of different technologies such as java, rest, soap, pl/sql, quartz scheduler",
			],
			achievements: [],
			technologies: ["java", "plsql", "javascript"],
		},
		{
			designation: "Software Developer",
			company: {
				name: "Reliance Jio Infocomm",
				url: "https://www.coai.com/content/reliance-jio-infocomm-limited",
                about: "Reliance Jio Infocomm Limited (RJIL), a subsidiary of Reliance Industries Limited (RIL), India’s largest private sector company, is the first telecom operator to hold pan India Unified License.",
                logo: "rjil.png"
			},
			from: "June 2013",
			to: "April 2015",
			location: "Mumbai",
			tasks: [
				"Was involved in the development of LTE-HSS(Home Subscriber Server) module of the R4G project undertaken by reliance industries",
				"Developed a C++ application for viewing HSS server logs distributed over multiple machines on single screen using pthreads and tcp sockets",
				"Worked on some core backend technologies like C/C++, Diameter (protocol), Linux, Wireshark",
			],
			achievements: [],
			technologies: ["c++", "linux"],
		},
	],
	lightBg: false,
};

export default data;
