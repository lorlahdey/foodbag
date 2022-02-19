import React from 'react'

const ServingCardMethod = ({src, alternative, methodHeader, methodDetails}) => {
    return (
        <div className='serving-method'>
            <img src={src} alt={alternative} />
            <h3>{methodHeader}</h3>
            <p>{methodDetails}</p>
        </div>
    )
}

export default ServingCardMethod