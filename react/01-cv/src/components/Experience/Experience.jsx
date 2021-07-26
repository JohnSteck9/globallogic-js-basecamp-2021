import React from 'react'

function Experience(props) {
    return (
        <div className='col-md-8 bg_right experience'>
            <h3><span>E</span>Experience</h3>

            <div className='education__box'>
                <b className='education__box_date'>September 2020 - Now</b>
                <p className='education__box_title'><strong>IONKID</strong>Junior Full Stack Developer</p>
            </div>
            <ul>
                <li>Front-End (HTML, CSS, JS, React)</li>
                <li>Backend (Flask API, Firebase, Firestore)
                </li>
                <li>Telegram Bot (Python: aiogram, xlrd, xlsxwriter, etc.)
                </li>
                <li>Github / Trello</li>
            </ul>
            <p className='experience__text'>IONKID is a web-mobile platform for people who teach children
                with special educational needs. We automate the documentation and adjustment of therapy
                artifacts, and provide tools to analyze them.</p>
        </div>
    )
}

export default Experience