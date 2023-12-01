import { IconShoppingCart } from "@tabler/icons-react";

const CartWidget = () => {
  return (
    <>
      <div className="flex flex-row gap-1">
        <IconShoppingCart size={24} />
        <span className="bg-red-700 text-white px-1 rounded-md font-bold">1</span>
      </div>
    </>
  );
};

export default CartWidget;
