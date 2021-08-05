import React from 'react'

const InterestCard = ({src, alterntives, interestTitle, interestNote}) => {
    return (
        <div className='interest-items'>
            <img src={src} alt={alterntives} />
            <h4>{interestTitle}</h4>
            <p>{interestNote}</p>
        </div>
    )
}

export default InterestCard
