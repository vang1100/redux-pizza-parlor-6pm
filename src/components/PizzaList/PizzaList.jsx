import PizzaItem
 from "../PizzaItem/PizzaItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function PizzaList({pizzaArray}) {

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/CustomerInfo");
      };

    return (
        <>

        {
            pizzaArray.map((pizza) => (
                <PizzaItem key={pizza.id} pizza={pizza} />
            ))
        }
         <button onClick={handleSubmit} type="submit">Next</button>

         {/* {pizzaArray.map(
      function(pizza) {
        return(
          <li key={pizza.id}>
              {pizza.name} {pizza.description} {pizza.price} {pizza.image_path}
          </li>
        )
      }
    )} */}
        </>
    )
}

export default PizzaList;