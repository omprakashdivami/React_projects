import React from 'react'
import Card from './Card'
import NewCard from './NewCard'
const AllCards = ({card, handleNote , delCard}) => {
  return (
    <div className='note-list'>
      {card.map((card)=>(
        <Card id={card.id} txt={card.txt} card_no={card.card_no} delCard={delCard} />
      ))}
        <NewCard handleNote={handleNote}/>
    </div>
  )
}

export default AllCards