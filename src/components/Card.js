import React from 'react'
import location from '../images/location.svg'

function Card(props) {
    return (
        <div className='card'>
            <img className='card-image' 
            src={props.item.imageUrl} />
            <div className='content'>
                <div className='location-line'>
                    <img className='locationImg' src={location}/>
                    <p className='country'>{props.item.country}</p>
                    <p className='gray'>View on Google Maps</p>
                </div>
                <h2 className='title'>{props.item.title}</h2>
                <h5 className='date'>{props.item.startDate} - {props.item.endDate}</h5>
                <p className='description'>{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card
