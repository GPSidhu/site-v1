const data = {
    id: 'projects',
    title: 'Projects',
    projects: [
        {
            title: 'Flappy Bird voice control',
            description: 'A browser game which can be played with voice commands',
            technologies: [
                'javascript', 'html', 'css', 'tensorflowjs', 'p5js'
            ],
            links: {
                demo: 'http://localhost:5000',
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
            title: 'ChessProf',
            description: 'An effort to get better at chess and help others with the same by providing free to learn chess openings, end game tactics and more',
            technologies: [
                'reactjs', 'javascript', 'html', 'css', 'tensorflowjs'
            ],
            links: {
                demo: 'http://localhost:5000',
                video: '',
                code: 'https://github.com/GPSidhu/chess'
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
            title: 'Personal Site',
            description: 'The first version of my personal site',
            technologies: [
                'reactjs', 'html', 'sass'
            ],
            links: {
                demo: 'http://localhost:3000',
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
