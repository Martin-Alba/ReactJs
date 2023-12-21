import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, image }) => {
  return (
    <Card
      key={id}
      className="flex justify-between mt-6 w-96 bg-slate-50 border border-slate-100 rounded-lg p-4 m-2 shadow-xl"
    >
      <CardBody className="flex flex-col items-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className=" mb-2 font-bold text-xl border-b h-[28px] overflow-hidden"
        >
          {title}
        </Typography>
        <Typography className="flex items-center justify-center">
            <img src={`${image}`} alt="imagen-producto" className="h-48" />
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <p className="text-black font-bold">${price}</p>

        <div className="flex justify-center">
          <Link
            className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-md p-2 text-white font-bold hover:shadow-2xl"
            to={`/item/${id}`}
          >
            Ver detalles del producto
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Item;
