/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import DefualImage from "/public/e-bazar.png";

interface IProductCard {
  discount?: number;
  quantity?: number;
  thumbnile: string;
  description?: string;
  title: string;
  rate: number;
  price: number;
  link: string;
  reviews: string;
  product?: any;
}

const ProductCard = ({ product }: any) => {
  const {
    name,
    ratings,
    price,
    image,
    _id,
    description,
    reviews,
    stock,
    catogory,
    numOfReviws,
  } = product;
  const stars = {
    edit: true,
    count: 5,
    activeColor: "tomato",
    size: 16,
    isHalf: true,
    value: ratings,
  };

  return (
    <div className="product-card">
      {/* Thumbnil */}
      <div className="relative bg-[#f7f7f7] grid justify-center">
        {/* dicount od sold out */}

        <div className="m-1 text-base absolute top-0 right-0 ">
          {stock === 0 ? <p className="text-red-500 p-1">SOLD</p> : null}
        </div>
        {/* Product image */}
        <Link href={`/product/${_id}`} passHref>
          <img
            className="h-72 cursor-pointer"
            src={image[0].url}
            alt={name}
            height="200px"
          />
        </Link>
      </div>
      <div className="bg-[#f7f7f7] rounded-b-md p-2 sm:pt-2">
        <Link href={`/product/${_id}`} passHref>
          <h4 className="subtitle cursor-pointer">{name}</h4>
        </Link>
        <div className="reviews">
          <ReactStars {...stars} /> <span>{numOfReviws} reviews</span>
        </div>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  Image: { DefualImage },
  name: "",
  description:
    "Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree.",
  rating: 2.5,
  price: 200,
  reviews: 200,
};

export default ProductCard;
