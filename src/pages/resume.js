import React from 'react'
import { Resume as MyResume } from '../components/resume'
import data from '../components/resume/data'

function Resume() {
    return (
        <div>
            <MyResume {...data}/>
        </div>
    )
}

export default Resume
