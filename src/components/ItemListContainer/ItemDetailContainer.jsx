import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../apis/fake-store";
import AddToCart from "../Cart/AddToCart";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
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
    return <p>Loading...</p>;
  }

  const { title, description, price, image } = product;

  return (
    <Card
      key={id}
      className="justify-between mt-6 w-96 bg-slate-50 border border-slate-100 rounded-lg p-4 m-2 shadow-xl -z-10"
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
          <div className="flex justify-center">
            <img src={`${image}`} alt="imagen-producto" className="w-48" />
          </div>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <p className="text-black font-bold">${price}</p>
        <AddToCart />
      </CardFooter>
    </Card>
  );
};

export default ItemDetailContainer;