import { IconShoppingCart } from "@tabler/icons-react";

const CartWidget = () => {
  return (
    <>
      <div className="flex-row gap-1 relative inline-block">
        <IconShoppingCart size={32} className="w-[48px] mt-2"/>
        <div className="text-[12px] font-bold">
          <span className="bg-red-500 rounded-full px-[5px] absolute top-0 right-0 text-[12px]">1</span>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
