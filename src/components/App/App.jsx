import React, { useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.css';
import data from '../../data/data.json';

// error
// const [state, setState] = useState(1);

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const newState = data.filter((e) =>
      e.name.toLowerCase().includes(searchQuery)
    );
    setCards(() => [...newState]);
  }, [searchQuery]);

  // console.log(cards, searchQuery);

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className='content container'>
        {searchQuery && (
          <p>
            {' '}
            По запросу {searchQuery} найдено {cards.length} товаров
          </p>
        )}
        {/* <InputBase setSearchQuery={setSearchQuery}  /> */}
         <CardList cards={cards} /> 
      </main>
      <Footer />
    </>
  );
}

export default App;

// useEffect(()=>{}) - update на каждое изменение компонента.
// useEffect(()=>{},[state]) - update на каждое изменение конкретного state.
// useEffect(()=>{},[]) - update в самом начале
