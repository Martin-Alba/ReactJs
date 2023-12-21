import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Item = ({ id, title, description, price }) => {
  return (
    <Card
      key={id}
      className="justify-between mt-6 w-96 bg-slate-50 border border-slate-100 rounded-lg p-4 m-2 shadow-xl"
    >
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className=" mb-2 font-bold text-xl border-b"
        >
          {title}
        </Typography>
        <Typography className="max-h-[100px] overflow-hidden">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <p className="text-black font-bold">${price}</p>

        <div className="flex justify-end">
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
