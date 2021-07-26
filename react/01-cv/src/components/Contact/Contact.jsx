import React from 'react'
import {ReactComponent as Email} from '../../images/svg/email.svg'
import {ReactComponent as Telegram} from '../../images/svg/telegram-plane.svg'
import {ReactComponent as Facebook} from '../../images/svg/facebook-f.svg'
import {ReactComponent as LinkedIn} from '../../images/svg/linkedin-in.svg'


function Contact(props) {
    return (
        <div className='col-md-4 bg_left contact'>
            <h3><span>C</span>Contact</h3>
            <div className='contact__item contact__item_email'>
                <Email />
                <p><b>Email</b><br />m0nitor2048@gmail.com</p>
            </div>
            <div className='contact__item'>

                <a href='https://t.me/JohnSteck'><Telegram />Telegram</a>
            </div>
            <div className='contact__item'>
                <a href='https://www.facebook.com/JohnSteckk/'><Facebook />Facebook</a>
            </div>
            <div className='contact__item'>
                <a href='https://www.linkedin.com/in/john-steck/'><LinkedIn />LinkedIn</a>
            </div>
        </div>
    )
}

export default Contact