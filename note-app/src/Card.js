import React from 'react'

const Card = ({id,txt, card_no, delCard}) => {
  return (
    <div className='card'>
      <div>{txt}</div>
      <div className='footer'>
        <div>{card_no}</div>
        <button onClick={()=>delCard(id)}>Delete</button>
      </div>
    </div>
    
  )
}

export default Card