import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function CustomerInfo() {
    const dispatch = useDispatch();
    const history = useHistory();

    const total = useSelector((state) => state.orderTotal);
    const deliveryMethod = useSelector((state) => state.deliveryMethod);

    const [customerData, setCustomerData] = useState({
        customer_name: '',
        street_address: '',
        city: '',
        zip: ''
    });

    const handleChange = (event) => {
        setCustomerData({
            ...customerData,
            [event.target.name]: event.target.value
        });
    };

    const handleDeliveryChange = (event) => {
        dispatch({
            type: 'SET_DELIVERY_METHOD',
            payload: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Dispatch the action to set customer info in the Redux store
        dispatch({
            type: 'SET_CUSTOMER_INFO',
            payload: {
                ...customerData,
                deliveryMethod: deliveryMethod,
            }
        });
        history.push('/checkout');

        // Axios POST request
        // axios.post('/api/order', {
        //     ...customerData,
        //     deliveryMethod: deliveryMethod,
        // })
        //     .then((result) => {
        //         console.log('Customer info posted successfully', result);
        //         // Redirect to checkout page after successful POST
        //         history.push('/checkout');
        //     })
        //     .catch((error) => {
        //         console.log('Failed to POST customer info', error);
        //     });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Step 2: Customer Information</h2>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <input name="streetAddress" placeholder="Street Address" onChange={handleChange} />
                <input name="city" placeholder="City" onChange={handleChange} />
                <input name="zip" placeholder="Zip" onChange={handleChange} />

                <div>
                    <label>
                        <input
                            type="radio"
                            value="Pickup"
                            checked={deliveryMethod === 'Pickup'}
                            onChange={handleDeliveryChange}
                        />
                        Pickup
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Delivery"
                            checked={deliveryMethod === 'Delivery'}
                            onChange={handleDeliveryChange}
                        />
                        Delivery
                    </label>
                </div>
                <button type="submit">Next</button>
            </form>
        </div>
    );
}
