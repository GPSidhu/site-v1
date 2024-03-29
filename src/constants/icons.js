import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaHome,
	// skill icons
	FaReact,
	FaAngular,
	FaSass,
    FaDatabase,
    FaJava,
    FaCodeBranch
} from "react-icons/fa";

import {
	SiCplusplus,
	SiGraphql,
	SiLinux,
	SiJavascript,
    SiTypescript,
    SiAuth0,
    SiJest
} from "react-icons/si";

// import {
//     AiOutlineConsoleSql
// } from 'react-icons/ai'

import { MdEmail, MdPhone } from "react-icons/md";

export const SOCIAL_ICON_COMP_MAP = {
	email: {
		icon: <MdEmail />,
		label: "Email",
		color: "white",
	},
	phone: {
		icon: <MdPhone />,
		label: "Mobile",
		color: "white",
	},
	site: {
		icon: <FaHome />,
		label: "Website",
	},
	facebook: {
		icon: <FaFacebook />,
		label: "Facebook",
		color: "#1778f2",
	},
	linkedin: {
		icon: <FaLinkedin />,
		label: "Linkedin",
		color: "#0e76a8",
	},
	github: {
		icon: <FaGithub />,
		label: "Github",
		color: "#000",
	},
	instagram: {
		icon: <FaInstagram />,
		label: "Instagram",
	},
};

export const SKILL_ICON_COMP_MAP = {
	reactjs: {
		icon: <FaReact />,
		label: "ReactJS",
		color: "#61DBFB",
	},
	angularjs: {
		icon: <FaAngular />,
		label: "AngularJS",
		color: "#B52E31",
	},
	"c++": {
		icon: <SiCplusplus />,
		label: "C++",
		color: "#3C638C",
	},
	plsql: {
		icon: <FaDatabase />,
		label: "Pl/sql",
		color: "#00758F",
	},
	graphql: {
		icon: <SiGraphql />,
		label: "GraphQL",
		color: "#e535ab",
	},
	linux: {
		icon: <SiLinux />,
		label: "Linux",
		color: "#EBC173",
	},
	java: {
		icon: <FaJava />,
		label: "Java",
		color: "#F89820",
	},
	javascript: {
		icon: <SiJavascript />,
		label: "Javascript",
		color: "#F0DB4F",
    },
    jest: {
        icon: <SiJest />,
        label: "Jest",
        color: "#A85E61"
    },
	sass: {
		icon: <FaSass />,
		label: "Sass",
		color: "#CD6799",
    },
    typescript: {
        icon: <SiTypescript />,
        label: "Typescript",
        color: "#3178C6"
    },
    oauth: {
        icon: <SiAuth0 />,
        label: "Oauth2.0"
    },
    multithreading: {
        icon: <FaCodeBranch />,
        label: "Multithreading"
    }
};
