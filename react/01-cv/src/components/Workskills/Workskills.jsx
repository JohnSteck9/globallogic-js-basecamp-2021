import React from 'react'
import WorkskillItem from './WorkskillItem'

const workskillsList = [
    'HTML / CSS / SCSS',
    'Bootstrap / BEM',
    'JavaScript',
    'React / Redux',
    'SQL: MySQL',
    'NoSQL: Firestore',
    'Firebase',
    'Python: Flask, aiogram, etc.',
    'Figma',
    'Linux',
    'Heroku',
    'Docker',
    'Trello',
    'Git / GitHub',
    'Data Structures & Algorithms',
]

function Workskills(props) {

    return (
        <div className='col-md-8 bg_right workskills'>
            <h3><span>W</span>Workskills</h3>
            <ul>
                {workskillsList.map((item) =>
                    <WorkskillItem key={item} value={item} />
                )}
            </ul>
        </div>
    )
}

export default Workskills