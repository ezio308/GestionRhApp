import React, { Component } from 'react'
import './Card.css';

const Card = (props) => {

    return (
        <div>
            <div className='emp'>
                {props.icon}
                <p className='stats'>{props.name}</p>
                <p  className='numb' style={{color :  props.color}}>{props.value}</p>
            </div>
        </div>
    )

}
export default Card;