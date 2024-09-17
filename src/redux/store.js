import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


const orderTotal = (state = 0, action) => {
  if (action.type === 'UPDATE_TOTAL') {
    return action.payload
  }
  return state;
}

const deliveryMethod = (state = 'delivery', action) => {
  if (action.type === 'SET_DELIVERY_METHOD') {
    return action.payload
  }
  return state
}

const customerInfo = (state = {
  customer_name: '',
  street_address: '',
  city: '',
  zip: ''
}, action) => {
  if (action.type === 'SET_CUSTOMER_INFO') {
    return action.payload
  }
  return state
}

const store = createStore(
  combineReducers({
    orderTotal,
    deliveryMethod,
    customerInfo
  }),

  applyMiddleware(logger),
);



export default store;
