import { IconShoppingCart } from "@tabler/icons-react";

const CartWidget = () => {
  return (
    <>
      <div className="flex flex-row gap-1">
        <IconShoppingCart size={32} />
        <div className="text-[12px] font-bold">
          <span className="bg-red-500 rounded-full p-1">1</span>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
