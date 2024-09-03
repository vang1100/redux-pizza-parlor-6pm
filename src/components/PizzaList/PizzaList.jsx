import PizzaItem
 from "../PizzaItem/PizzaItem";
function PizzaList({pizzaArray}) {
    return (
        <>

        {
            pizzaArray.map((pizza) => (
                <PizzaItem key={pizza.id} pizza={pizza} />
            ))
        }
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