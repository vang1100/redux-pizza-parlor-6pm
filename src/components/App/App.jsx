import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';

function App() {

  // variables

  const [pizzaArray, setPizzaArray] = useState([]);
  const [pizzaName, setPizzaName] = useState('');
  const [pizzaDescription, setPizzaDescription] = useState('');
  const [pizzaPrice, setPizzaPrice] = useState('');
  const [pizzaImage, setPizzaImage] = useState('');

  // useEffect
  useEffect(() => {
    getPizzas();
  }, [])

  // GET 

  const getPizzas = () => {
    // console.log('get pizza array');

    axios.get('/api/pizza')
      .then((response) => {
        console.log(response.data);
        setPizzaArray(response.data);
      }).catch((error) => {
        console.log(error)
      });
  }


  return (
    <Router>
      <div className='App'>

        <Header />
        <h1>WHAT'S ON THE MENU?</h1>

        <Switch>
          {/* Pizza List Route */}
          <Route exact path="/" >
          <PizzaList pizzaArray={pizzaArray} />
          </Route>

          {/* Customer Info Route */}
          <Route path="/CustomerInfo" >
          <CustomerInfo/> 
          </Route>

           {/* Checkout Info Route */}
           <Route path="/Checkout" >
           <Checkout/>
           </Route>

        </Switch>


      </div>
    </Router>
  );
}

export default App;
