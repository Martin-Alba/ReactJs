import Item from "./Item";
import { Spinner } from "@material-tailwind/react";
const ItemList = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center w-auto h-[100vh]">
        <Spinner color="pink" className="w-16 h-16" />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap">
      {products.map((p) => {
        return (
          <Item
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
