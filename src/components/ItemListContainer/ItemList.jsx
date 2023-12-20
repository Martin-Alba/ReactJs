import Item from "./Item";
const ItemList = ({ products }) => {
  return (
    <div className="flex flex-wrap">
      {products.map((p) => {
        return (
          <Item
            key={p.id}
            title={p.title}
            description={p.description}
            price={p.price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
