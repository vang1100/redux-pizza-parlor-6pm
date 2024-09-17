import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Checkout.css';

export default function Checkout() {

    const history = useHistory();
    const { customer_name, street_address, city, zip } = useSelector((state) => state.customerInfo);

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/");
      };


    

    return (
        <div>
            <h2> Step 3: Checkout</h2>
            {/* TODO: Display items in the cart */}

            <div>
                <p>{customer_name}</p>
                <p>{street_address}</p>
                <p>{city} {zip}</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Pizza</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Pizza Name </td>
                        <td> Pizza Price </td>
                    </tr>
                </tbody>

            </table>




            <button onClick={handleSubmit} type="button">Checkout</button>
        </div>
    );
}

