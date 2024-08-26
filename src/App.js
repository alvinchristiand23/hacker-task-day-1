import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { items } from './constant/data';

function App() {
  const [cards, setCards] = useState(items);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  const addItem = () => {
    if (!title || !subTitle) {
      return;
    }

    const newCard = {
      title: title,
      subTitle: subTitle,
    };
    setCards((e) => [...e, newCard]);
    setTitle('');
    setSubTitle('');
  };

  const removeItem = () => {
    setCards((e) => e.slice(0, e.length - 1));
  };

  return (
    <div className='app'>
      <h1>Task: Day 1 - React Component</h1>
      <div className='input-container'>
        <input
          className='input'
          placeholder='Title..'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className='input'
          placeholder='Sub Title..'
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />
      </div>
      <div className='button-container'>
        <button className='button' onClick={addItem}>
          Add Item
        </button>
        <button className='button' onClick={removeItem}>
          Remove Item
        </button>
      </div>
      <div className='card-container'>
        {cards.map((item, index) => (
          <Card key={item.title + index} title={item.title} subTitle={item.subTitle} />
        ))}
      </div>
    </div>
  );
}

export default App;
