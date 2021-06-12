const data = {
    id: 'projects',
    title: 'Projects',
    projects: [
        {
            title: 'ChessProf',
            description: 
            'A web app built in react and typescript with an idea to help people get better at chess by providing free ' + 
            'content and an interactive ui for learning chess openings, end game tactics etc. It is work in progress currently.',
            technologies: [
                'ReactJs', 'Typescript', 'Redux'
            ],
            links: {
                demo: 'http://chessprof.netlify.app/',
                video: '',
                code: 'https://github.com/GPSidhu/chessprof-dsktp'
            },
            snapshots: [
                '/chess/chessprof_1.png',
                '/chess/chessprof_2.png',
                '/chess/chessprof_3.png',
                '/chess/chessprof_4.png',
            ],
            cover: '/chess/chess_1.png'
        },
        {
            title: 'A Bird Game',
            description: 'A browser game created just for fun built in p5.js and tensorflowjs ' + 
            'that allows you to control the bird using voice commands.',
            technologies: [
                'p5js', 'tensorflowjs'
            ],
            links: {
                // demo: 'http://localhost:5000',
                video: '',
                code: 'https://github.com/GPSidhu/flappy-bird-voice-control'
            },
            snapshots: [
                '/flappy-bird/flappy_bird_1.png',
                '/flappy-bird/flappy_bird_2.png',
                '/flappy-bird/flappy_bird_3.png'
            ],
            cover: '/flappy-bird/flappy_bird_1.png'
        },
        {
            title: 'IPL Fantasy Team Maker',
            description: 'For cricket lovers, create your optimum dream11 team without any hussle , ' + 
            'the algo will take care of selecting maximum highest rated players but adhering to the constraints',
            technologies: [
                'ReactJs', 'Bootstrap'
            ],
            links: {
                // demo: 'http://localhost:3000',
                video: '',
                code: 'https://github.com/GPSidhu/ipl_team_maker_v1'
            },
            snapshots: [
                '/ipl_team_maker/ipl_team_maker_1.png',
                '/ipl_team_maker/ipl_team_maker_2.png',
            ],
            cover: '/site/site_1.png'
        },
        {
            title: 'Personal Site',
            description: 'My first attempt at building a personal site from scratch. Blog will be coming soon...',
            technologies: [
                'Reactjs'
            ],
            links: {
                demo: 'https://guri-sidhu.netlify.app',
                video: '',
                code: 'https://github.com/GPSidhu/site-v1'
            },
            snapshots: [
                '/site/site_1.png',
            ],
            cover: '/site/site_1.png'
        }
    ],
    lightBg: true,
    lightText: false
}

export default data
