import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList';

function App() {

  // variables

  const [pizzaArray, setPizzaArray] = useState([]);
  const [pizzaName, setPizzaName] = useState('');
  const [pizzaDescription, setPizzaDescription] = useState('');
  const [pizzaPrice, setPizzaPrice] = useState('');
  const [pizzaImage, setPizzaImage] = useState('');

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
    <h1>WHAT'S ON THE MENU?</h1>
    
    <PizzaList pizzaArray={pizzaArray} />

    </div>
  );
}

export default App;
