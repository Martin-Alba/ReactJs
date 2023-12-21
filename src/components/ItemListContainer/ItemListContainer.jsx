import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../../apis/fake-store.js";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <div>
      <main className="text-center text-3xl mt-8 mb-10">{greeting}</main>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
