import { useState } from "react";
import { Button } from "@material-tailwind/react";

const addToCart = () => {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    if (count === 1) {
      alert(`Agregaste al carrito ${count} unidad.`);
    } else if (count === 0) {
      alert(`No agregaste nada al carrito.`);
    } else {
      alert(`Agregaste al carrito ${count} unidades.`);
    }
  };

  const increment = () => {
    if (count < 10) return setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) return setCount(count - 1);
  };

  return (
    <div className="flex justify-center">
      <Button
        className="bg-gradient-to-r from-green-700 to-green-400 w-10 h-10 p-1 mr-1 text-lg"
        onClick={increment}
      >
        {" "}
        +{" "}
      </Button>
      <Button
        className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white h-10 p-1"
        onClick={addToCart}
      >
        Add to Cart {count}
      </Button>
      <Button
        className="bg-gradient-to-r from-red-400 to-red-700 w-10 h-10 p-1 ml-1 text-lg"
        onClick={decrement}
      >
        {" "}
        -{" "}
      </Button>
    </div>
  );
};

export default addToCart;
