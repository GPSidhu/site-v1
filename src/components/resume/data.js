const data = {
	id: "gurpreet-singh",
	title: "Gurpreet Singh",
	subTitle: "Software Engineer",
	description:
		"Passionate for coding. Having 7+ years of experience in implementing and maintaining applications. Well versed in different backend and front end technologies",
	avatar: "profilePic.png",
	contacts: [
		{
			type: "email",
			value: "ss.guri1991@gmail.com",
		},
		{
			type: "phone",
			value: "+91-9581000331",
		},
		{
			type: "site",
			value: "gurisidhu.com",
		},
		{
			type: "linkedin",
			value: "linkedin.com/in/g-singh-sidhu/",
		},
		{
			type: "github",
			value: "github.com/GPSidhu",
		},
	],
	skills: {
		flat: false,
		sections: [
			{
				title: "Programming Languages",
				values: [
					"C++",
					"Java",
					"Javascript",
					"Sql",
					"HTML",
					"Css/Sass",
					"GraphQL",
				],
			},
			{
				title: "Libraries and Frameworks",
				values: [
					"ReactJS",
					"AngularJS",
					"Oracle Apex",
					"Node.js",
					"Redux",
				],
			},
			{
				title: "Tools and Platforms",
				values: [
					"Git",
					"Servicenow",
					"Webpack",
					"Gulp",
					"Oracle Data Integrator",
					"Weblogic",
				],
			},
		],
	},
	experience: {
		title: "Experience",
		jobs: [
			{
				designation: "Senior Software Engineer",
				company: "Servicenow",
				from: "July, 2018",
				to: "December, 2020",
				location: "Hyderabad",
				tasks: [
					"Worked in the On-Call schedule management under core ITSM dev team starting from Madrid till Quebec release of Servicenow.",
					"New York: Enhanced On-Call ui to support custom escalations and worked to integrate Major incident with alert management modules",
					"Orlando: Worked in a team to develop fully functional calendar component in seismic. Spiked to support MS Teams as a channel for On-call escalations.",
					"Paris: Developed On-Call Live Escalation Tracking(UI). Worked on integrations to get the ability to create incidents in Servicenow via slash commands from Slack.",
					"Quebec: Worked in Project AIR (Automated Incident Response) a lightweight easy to buy/use version of servicenow for SREs. Apart from leading the effort to modify and redesign on-call features wherever applicable to uptake in AIR," +
						" was also responsible for story planning, pointing, code reviews and knowledge transfers regarding On-call management.",
				],
				achievements: [
					{
						title: "Quarterly Awards 2020 Q3",
						value: "Team Player",
					},
				],
			},
			{
				designation: "IT Senior Consultant",
				company: "Oracle",
				from: "April, 2015",
				to: "July, 2018",
				location: "Hyderabad",
				tasks: [
					"Designed and developed a generic framework for real time data migration between on-premise and cloud instances while handling consistency and synchronization",
					"Responsible for writing business rules as per the requirements for PA and revenue generation processes",
					"Developed a dashboard in Oracle Apex for reducing resource managers' time to manage schedules",
					"Worked on technologies like java, rest, soap, pl/sql",
				],
				achievements: [],
			},
			{
				designation: "Software Developer",
				company: "Reliance Jio Infocomm",
				from: "June, 2013",
				to: "April, 2015",
				location: "Mumbai",
				tasks: [
					"Was involved in the development of LTE-HSS(Home Subscriber Server) module of the R4G project undertaken by reliance industries",
					"Developed a C++ application for viewing HSS server logs distributed over multiple machines on single screen using pthreads and tcp sockets",
					"Worked on some core backend technologies like C/C++, Diameter (protocol), Linux, Wireshark",
				],
				achievements: [],
			},
		],
	},
	projects: [
		{
			title: "ChessProf (chessprof.netlify.app)",
			description:
				"An effort to get better at chess and to help others with the same by providing free to learn chess openings, end game tactics etc",
		},
		{
			title: "A Flappy Bird Game",
			description:
				"A browser game using p5.js and tensorflowjs that allows you to play using voice commands",
		},
		{
			title: "Others",
			description:
				"https://github.com/GPSidhu/ => /algo-visualizer-v1, /ipl_team_maker_v1",
		},
		// {
		//     title: 'AI Sudoku solver',
		//     description: 'An andrioid app that allows you to scan a sudoku puzzle and solve it on the fly rendering the solution in augmented reality'
		// },
		// {
		//     title: 'Space Management (Oracle)',
		//     description: 'Actively worked in a team of 5 for internal hackathon to develop an innovative app with goal of managing employee seat plans and allocations using Oracle JET'
		// }
	],
	education: [
		{
			course: "B.Tech",
			discipline: "Computer Science",
			from: "2009",
			to: "2013",
			school: "National Institute of Technology",
			city: "Jalandhar",
			state: "Pb",
			country: "IN",
			grade: "8.25",
			maxGrade: "10",
		},
		{
			course: "XII",
			discipline: "CBSE",
			from: "2008",
			to: "2009",
			school: "St. Andrews Sr. Sec. School",
			city: "Agra",
			state: "UP",
			country: "IN",
			grade: "95%",
			maxGrade: "",
		},
	],
};

export default data;
