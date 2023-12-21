import Item from "./Item";
const ItemList = ({ products }) => {
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
