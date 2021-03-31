const data = {
    id: 'gurpreet-singh',
    title: 'Gurpreet Singh',
    subTitle: 'Software Engineer',
    description: 'Passionate for coding. Having 7+ years of experience in implementing and maintaining applications. Well versed in different backend and front end technologies',
    avatar: 'gurpreet.png',
    contacts: [
        {
            type: 'email',
            value: 'ss.guri1991@gmail.com'
        },
        {
            type: 'phone',
            value: '+91-9581000331'
        },
        {
            type: 'site',
            value: 'gurisidhu.com'
        },
        {
            type: 'linkedin',
            value: 'linkedin.com/in/gurpreet-singh-75266446/'
        },
        {
            type: 'github',
            value: 'github.com/GPSidhu'
        }
    ],
    skills: {
        flat: false,
        sections: [
            {
                title: 'Programming Languages',
                values: ['C++', 'Java', 'Javascript', 'Sql', 'HTML', 'Css/Sass', 'GraphQL']
            },
            {
                title: 'Libraries and Frameworks',
                values: ['ReactJS', 'AngularJS', 'Oracle Apex', 'Node.js', 'Redux']
            },
            {
                title: 'Tools and Platforms',
                values: ['Git', 'Servicenow', 'Webpack', 'Gulp', 'Oracle Data Integrator', 'Weblogic']
            }
        ]
    },
    experience: {
        title: 'Experience',
        jobs: [
            {
                designation: 'Senior Software Engineer',
                company: 'Servicenow',
                from: 'July, 2018',
                to: 'December, 2020',
                location: 'Hyderabad',
                tasks:  [
                    'On-call scheduling: was primarily part of on-call management team under Incident Management',
                    'Incident management: developed varies features such as On-Call Live Tracking(UI),  Incident-Alert management integration, starting from Servicenow Madrid to Paris releases',
                    'Seismic Calendar: Worked on the development of a fully functional calendar component using in house developed react-like framework called seismic',
                    'Worked on spiking and implementing integrations of Servicenow ITSM module with Slack, MS Teams',
                    'Project Air - Automated Incident Response: spiked, designed and developed several UI components. Involved in re-using and implementing on-call for AIR',
                    //'Worked on different front-end technologies like seismic, js, sass, angularjs, jelly'
                ],
                achievements: [
                    {
                        title: 'Quarterly Awards 2020 Q3',
                        value: 'Team Player'
                    }
                ]
            },
            {
                designation: 'IT Senior Consultant',
                company: 'Oracle',
                from: 'April, 2015',
                to: 'July, 2018',
                location: 'Hyderabad',
                tasks:  [
                    'Designed and developed a generic framework for real time data migration between on-premise and cloud instances while handling consistency and synchronization',
                    'Responsible for understanding and writing business rules as per the requirements for project accounting and revenue generation processes as part of migration to cloud',
                    'Developed a ui dashboard from scratch using Oracle Apex ad javascript for optimizing and reducing time to manage resources and schedules',
                    'Worked on a variety of different technologies such as java, rest, soap, pl/sql, quartz scheduler'
                ],
                achievements: [
                ]
            },
            {
                designation: 'Software Developer',
                company: 'Reliance Jio Infocomm',
                from: 'June, 2013',
                to: 'April, 2015',
                location: 'Mumbai',
                tasks:  [
                    'Was involved in the development of LTE-HSS(Home Subscriber Server) module of the R4G project undertaken by reliance industries',
                    'Developed a C++ application for viewing HSS server logs distributed over multiple machines on single screen using pthreads and tcp sockets',
                    'Worked on some core backend technologies like C/C++, Diameter (protocol), Linux, Wireshark',
                ],
                achievements: [
                ]
            }
        ]
    },
    projects: [
        {
            title: 'Chess Game',
            description: 'An online multiplayer chess engine which allows you to play the game hands free with voice commands'
        },
        {
            title: 'AI Sudoku solver',
            description: 'An andrioid app that allows you to scan a sudoku puzzle and solve it on the fly rendering the solution in augmented reality'
        },
        {
            title: 'Space Management (Oracle)',
            description: 'Actively worked in a team of 5 for internal hackathon to develop an innovative app with goal of managing employee seat plans and allocations using Oracle JET'
        }
    ],
    education: [
        {
            course: 'B.Tech',
            discipline: 'Computer Science',
            from: '2009',
            to: '2013',
            school: 'National Institute of Technology',
            city: 'Jalandhar',
            state: 'Pb',
            country: 'IN',
            grade: '8.25',
            maxGrade: '10'
        },
        {
            course: 'XII',
            discipline: 'CBSE',
            from: '2008',
            to: '2009',
            school: 'St. Andrews Sr. Sec. School',
            city: 'Agra',
            state: 'UP',
            country: 'IN',
            grade: '95%',
            maxGrade: ''
        }
    ]
};

export default data;