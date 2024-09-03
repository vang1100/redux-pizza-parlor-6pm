import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';

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
    setPizzaArray(response.data);
  }).catch( (error) => {
    console.log(error)
  });
}

  return (
    <div className='App'>
    
    <Header />
  
    </div>
  );
}

export default App;
