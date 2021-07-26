import React from 'react'
import EducationItem from './EducationItem'

const educationData = [
    {
        id: 1,
        'year': '2015-2019',
        'institution': 'Technical College LPNU',
        'field': 'Junior Electromechanics Specialist',
    },
    {
        id: 2,
        'year': '2019-2020',
        'institution': 'Lviv Polytechnic National University',
        'field': 'Avionics',
    },
    {
        id: 3,
        'year': '2020-2023',
        'institution': 'Lviv Polytechnic National University',
        'field': 'Internet of Things | Computer Science',
    }
]


function Education(props) {
    return (
        <div className='col-md-8 bg_right education'>
            <h3><span>E</span>Education</h3>

            {educationData.map(item => (
                <EducationItem key={item.id} value={item}/>
            ))}


        </div>
    )
}

export default Education