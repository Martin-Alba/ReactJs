import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../apis/fake-store";
import AddToCart from "../Cart/AddToCart";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Spinner,
} from "@material-tailwind/react";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const foundProduct = await getProductById(id);
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center w-auto h-[100vh]">
        <Spinner color="pink" className="w-16 h-16" />
      </div>
    );
  }

  const { title, description, price, image } = product;

  return (
    <div className="flex justify-center w-[100%]">
      <Card
        key={id}
        className="justify-between m-2 mt-20 w-96 bg-slate-50 border border-slate-100 rounded-lg p-4 shadow-xl"
      >
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className=" mb-2 font-bold text-xl border-b"
          >
            {title}
          </Typography>
          <Typography>
            <span className="flex justify-center">
              <img
                src={`${image}`}
                alt="imagen-producto"
                className="w-48 m-5"
              />
            </span>
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <p className="text-black font-bold">${price}</p>
          <AddToCart />
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
