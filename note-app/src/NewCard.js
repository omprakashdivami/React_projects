import React, { useState } from 'react'

const NewCard = ({handleNote}) => {
    const [txt, settxt] =useState('')
    const input = (e)=>{
        settxt(e.target.value)
    }
    const save = ()=>{
      handleNote(txt)
      settxt('')
    }
  return (
    <div className='new card'>
        <textarea onChange={input} value={txt} rows="8" cols='10' placeholder='Type here..'>

        </textarea>
        <div className='footer'>
            
            <button className='save' onClick={save}>save</button>
        </div>

    </div>
  )
}

export default NewCard