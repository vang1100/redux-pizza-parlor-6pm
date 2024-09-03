import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // variables

  const [pizzaArray, setPizzaArray] = useState([]);

  // useEffect
  useEffect (() => {
    getPizzas();
  },[])

  // GET 

  const getPizzas = () => {
   // console.log('get pizza array');

   axios.get('/api/pizza')
   .then((response) => {
    console.log(response.data);
   })

  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
