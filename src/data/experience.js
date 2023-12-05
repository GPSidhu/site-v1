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
                "Contributor in Microsoft Loop team by developing and owning 3 components from scratch while maintaining and enhancing 2+ productionised components and features.",
                "Liaised with project managers, designers and other stakeholders to design and deliver the new Microsoft Loop components for third party (3P) data integrations of Jira, Trello and GitHub for Microsoft wide audience as well as General Availability.",
                "Spearheaded the end-to-end ownership of planning, design resolution, development, and delivery of highly scalable and reusable components utilized by higher-order 3P Loop components, resulting in increased development efficiency and reduced time-to-market.",
                "Lead the end to end design, development and delivery of a highly flexible and generic people component in the Loop ecosystem responsible for retrieving, storing and rendering contextual user data for 3P components.",
                "Developed re-usable and generic components for handling user interactions involving authentication and syncing flows of 3P components.",
                "Responsible for complete development to production delivery of the above components with WCAG compliance, unit and functional tests, internationalization and localization.",
                "Enhanced the feature for displaying suggested tasks that are generated from Microsoft Teams’ meeting transcripts using AI and converting them into Loop’s Task list component for better user visibility, interaction and transferring feedback back to the AI model."
            ],
            taskRefs: {
                // add a ref link to end of above task
                0: {
                    label: "Microsoft Loop",
                    link: "https://www.microsoft.com/en-us/microsoft-loop"
                },
                1: {
                    label: "View",
                    link: "https://twitter.com/MicrosoftLoop/status/1691087283477229568"
                }
            },
            technologies: ["reactjs", "typescript", "rest", "javascript", "oauth", "jest"]
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
				"Delivered features and enhancements as an individual contributor in the core IT Service Management engineering team of 7+ engineers across 4+ releases of ServiceNow platform.",
				"Spearheaded the development of On-call management module for a new lightweight all-in-one Incident Management Response Platform called Lightstep. As a key contributor and SME, led the story planning, pointing, development and mentoring efforts contributing to higher team efficiency and reducing go to market times.",
				"Contributed in developing fully functional and re-usable Now-Calendar component from scratch using the in-house developed React like framework that allowed incident managers and stakeholders to see on-call events and plans in different calendar views.",
				"Enhanced user interfaces integrated in On-Call scheduling module which further helped incident managers to add more customized escalation plans to help reduce MTTR.",
                "Lead the Slack Integration effort to reduce incident response times by enabling users to do a seamless bidirectional integration of the platform. This enabled them to create dedicated channels for incidents so that responders can collaborate seamlessly.",
                "Developed the interface to Track Live On-call Escalations happening in real time which greatly improved the existing capabilities, reducing response times and providing users with real time escalation updates.",
                "Received the best Team Player award of Q3 2020 for my contributions."
			],
			taskRefs: {
                // add a ref link to end of above task
                1: {
                    label: "Lightstep",
                    link: "https://www.servicenow.com/products/observability.html"
                },
				2: {
					label: "Calendar doc",
					link:
						"https://developer.servicenow.com/dev.do#!/reference/next-experience/vancouver/now-components/now-calendar/usage",
				},
				3: {
					label: "On-Call Scheduling",
					link:
						"https://docs.servicenow.com/bundle/vancouver-it-service-management/page/administer/on-call-scheduling/concept/c_OnCallScheduling.html",
                },
                4: {
                    label: "Slack Integration",
                    link: "https://docs.servicenow.com/bundle/vancouver-it-service-management/page/product/itsm-tcm/concept/im-slack-collaboration.html"
                },
                5: {
                    label: "View",
                    link: "https://docs.servicenow.com/bundle/vancouver-it-service-management/page/administer/on-call-scheduling/task/track-escalation-progress-oncall.html"
                }
			},
			achievements: [
				{
					title: "Quarterly Awards 2020 Q3",
					value: "Team Player",
				},
			],
			technologies: ["angularjs", "nodejs", "reactjs", "graphql", "sass", "html"],
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
				"Lead the design and development of a framework for real time data migration between on-premise and cloud instances as part of Oracle’s cloud migration for internal business units. Proposed and implemented solutions and resolved design ambiguities while adhering to strict timelines and available resources.",
				"Collaborated with project managers and stakeholders to do technical feasibility analysis on business requirements and converting them into business rules using procedural SQL and other Oracle tools like BI publisher.",
				"Developed a dashboard in Oracle Apex and vanilla JS for reducing the management time and increasing efficiency of resource managers by enabling crud operation and complex time sheet visualizations all in single screen.",
				"Hands on experience with Java, Rest, Soap, PL/SQL, database query optimization and other Oracle tools while working on different projects.",
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
				"Was involved in the development of LTE-HSS(Home Subscriber Server) module of the R4G project undertaken by reliance industries.",
				"Developed a C++ application for viewing HSS server logs distributed over multiple machines on single screen using Posix threads and TCP sockets.",
				"Acquired proficiency in some core technologies like C/C++, multi-threading, Diameter (protocol), Linux and Wireshark.",
            ],
            taskRefs: {
                0: {
                    label: "View",
                    link: "https://www.ril.com/businesses/digital-services-jio"
                }
            },
			achievements: [],
			technologies: ["c++", "linux", "multithreading"],
		},
	],
	lightBg: false,
};

export default data;
