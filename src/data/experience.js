const data = {
        id: 'experience',
        title: 'Experience',
        jobs: [
            {
                designation: 'Senior Software Engineer',
                company: 'Servicenow',
                from: 'July 2018',
                to: 'December 2020',
                location: 'Hyderabad',
                tasks:  [
                    'On-call scheduling: was primarily part of on-call management team under Incident Management',
                    'Incident management: developed varies features such as On-Call Live Tracking(UI)',
                    //  Incident-Alert management integration, starting from Servicenow Madrid to Paris releases',
                    'Seismic Calendar: Worked on the development of a fully functional calendar component using in house developed react-like framework called seismic',
                    'Worked on spiking and implementing integrations of Servicenow ITSM module with Slack, MS Teams',
                    'Project Air - Automated Incident Response: spiked, designed and developed several UI components',
                    //. Involved in re-using and implementing on-call for AIR',
                    //'Worked on different front-end technologies like seismic, js, sass, angularjs, jelly'
                ],
                achievements: [
                    {
                        title: 'Quarterly Awards 2020 Q3',
                        value: 'Team Player'
                    }
                ],
                technologies: [
                    'angularjs', 'nodejs', 'reactjs', 'graphql', 'sass'
                ]
            },
            {
                designation: 'IT Senior Consultant',
                company: 'Oracle',
                from: 'April 2015',
                to: 'July 2018',
                location: 'Hyderabad',
                tasks:  [
                    'Designed and developed a generic framework for real time data migration between on-premise and cloud instances while handling consistency and synchronization',
                    'Responsible for understanding and writing business rules as per the requirements for project accounting and revenue generation processes as part of migration to cloud',
                    'Developed a ui dashboard from scratch using Oracle Apex ad javascript for optimizing and reducing time to manage resources and schedules',
                    'Worked on a variety of different technologies such as java, rest, soap, pl/sql, quartz scheduler'
                ],
                achievements: [
                ],
                technologies: [
                    'java', 'plsql', 'javascript'
                ]
            },
            {
                designation: 'Software Developer',
                company: 'Reliance Jio Infocomm',
                from: 'June 2013',
                to: 'April 2015',
                location: 'Mumbai',
                tasks:  [
                    'Was involved in the development of LTE-HSS(Home Subscriber Server) module of the R4G project undertaken by reliance industries',
                    'Developed a C++ application for viewing HSS server logs distributed over multiple machines on single screen using pthreads and tcp sockets',
                    'Worked on some core backend technologies like C/C++, Diameter (protocol), Linux, Wireshark',
                ],
                achievements: [
                ],
                technologies: [
                    'c++', 'linux'
                ]
            }
        ],
        lightBg: false
}

export default data
