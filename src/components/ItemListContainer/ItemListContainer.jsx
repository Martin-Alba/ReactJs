import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../../apis/fake-store.js";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  console.log(products)

  return (
    <div>
      <main className="text-center text-3xl mt-32">{greeting}</main>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
