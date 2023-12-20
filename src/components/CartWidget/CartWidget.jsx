import { IconShoppingCart } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to="/cart">
        <div className="flex-row gap-1 relative inline-block">
          <IconShoppingCart size={32} className="w-[48px] mt-2" />
          <div className="text-[12px] font-bold">
            <span className="bg-red-500 rounded-full px-[5px] absolute top-0 right-0 text-[12px]">
              1
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
