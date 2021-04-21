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
    FaDatabase
} from 'react-icons/fa'

import {
    SiCplusplus,
    SiGraphql,
    SiLinux,
    SiJava,
    SiJavascript
} from 'react-icons/si'

// import {
//     AiOutlineConsoleSql
// } from 'react-icons/ai'

import {
    MdEmail,
    MdPhone
} from 'react-icons/md'

export const SOCIAL_ICON_COMP_MAP = {
    email: <MdEmail/>,
    phone: <MdPhone/>,
    site: <FaHome/>,
    facebook: <FaFacebook/>,
    linkedin: <FaLinkedin/>,
    github: <FaGithub/>,
    instagram: <FaInstagram/>
}


export const SKILL_ICON_COMP_MAP = {
    'reactjs': {
        icon: <FaReact />,
        label: 'ReactJS'
    },
    'angularjs': {
        icon: <FaAngular />,
        label: 'AngularJS'
    },
    'c++': {
        icon: <SiCplusplus />,
        label: 'C++'
    },
    'plsql': {
        icon: <FaDatabase />,
        label: 'PL/SQL'
    },
    'graphql': {
        icon: <SiGraphql />,
        label: 'GraphQL'
    },
    'linux': {
        icon: <SiLinux />,
        label: 'Linux'
    },
    'java': {
        icon: <SiJava />,
        label: 'Java'
    },
    'javascript': {
        icon: <SiJavascript />,
        label: 'Javascript'
    },
    'sass': {
        icon: <FaSass />,
        label: 'Sass'
    }
}