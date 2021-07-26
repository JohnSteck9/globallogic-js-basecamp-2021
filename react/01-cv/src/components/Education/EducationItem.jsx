import React from 'react'

function EducationItem(props) {
    return (
        <div className='education__box'>
            <b className='education__box_date'>{props.value.year}</b>
            <p className='education__box_title'>
                <strong>{props.value.institution}</strong>
                {props.value.field}
            </p>
        </div>
    )
}

export default EducationItem