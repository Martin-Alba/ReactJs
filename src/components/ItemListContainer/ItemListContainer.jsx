import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../../apis/fake-store.js";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  if (filteredProducts.length === 0) {
    return (
      <div>
        <main className="text-center text-3xl mt-8 mb-10">{greeting}</main>
        <ItemList products={products} />
      </div>
    );
  } else {
    return (
      <div>
        <main className="text-center text-3xl mt-8 mb-10">{greeting}</main>
        <ItemList products={filteredProducts} />
      </div>
    );
  }
};

export default ItemListContainer;
