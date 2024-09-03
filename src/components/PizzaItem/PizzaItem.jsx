import axios from 'axios';

function PizzaItem({pizza}){



     
    return (
        <>
            <ul>
                <h2>{pizza.name}</h2> 
                <p>{pizza.description}</p> 
                <p>${pizza.price}</p>
                <p><img src={pizza.image_path}/></p>
                <button>REMOVE</button>
                <button>ADD</button>
             </ul>
        </>
    )
}

export default PizzaItem;