import React from 'react'

const Filter = ({findCard, setFindCard}) => {
  return (
    <div>
        <input type='text' placeholder='search' onChange={(e)=>setFindCard(e.target.value)}></input>
    </div>
  )
}

export default Filter