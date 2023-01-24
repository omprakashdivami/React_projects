import logo from './logo.svg';
import './App.css';
import AllCards from './AllCards';
import { useState } from 'react';
import {nanoid} from 'nanoid';
import Filter from './Filter';
function App() {
  const [card, setCard]=useState([])
const addNote = (txt)=>{
      const newCard = {
        id: nanoid(),
        txt: txt,
        card_no: card.length+1
      }
      const newCards = [...card, newCard];
      setCard(newCards);
      //creating a new array while adding a card
}
const del = (id)=>{
      const newCards=  card.filter((card)=>card.id!=id)
        setCard(newCards)
}

const [findCard , setFindCard]=useState('')
  return (
    <>
      <div className="App">
        
      <AllCards card={card.filter((item)=>item.txt.includes(findCard))} handleNote={addNote} delCard={del} />
      <Filter  findCard={findCard} setFindCard={setFindCard}/>
    </div>
    </>
  );
}

export default App;
