import Router from "next/router";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/action/productActions";
import Loading from "../../Loading";
import ProductCarodel from "./ProductCarosel";

interface ProductDetailsProps{
  loading?:boolean;
  error:string;
  product:any
}

const ProductDetails = ({product,loading}:any) => {
 
  
  const stars = {
    edit: true,
    count: 5,
    activeColor: "tomato",
    size: 24,
    isHalf: true,
  };

  return (
    <>
      {
        product && (
          <section className="container product-details">
            <div className="image">
              {product.image &&
                product.image.map((item: any, i: any) => (
                  <ProductCarodel key={item._id} ImageLink={item.url} />
                ))}
            </div>
            <div className="details p-10 justify-center items-center font-Roboto">
            
              <div className="border-2 font-Roboto mb-5 text-base pl-5 p-2 ">Catogory: {product.catogory}</div>
              <h2 className="subtitle">{product.name}</h2>
              <p className="price mt-4 text-2xl">${product.price}</p>

              <address className="font-Roboto pt-5 text-base  text-justify">
                {product.description}
              </address>
              <span className="reviews mt-5 text-xl">
                <ReactStars value={product.rating} {...stars} />{" "}
                {product.numOfReviws} Reviews
              </span>
              <span className="flex border-2 w-32 mt-2 p-2 justify-between">
                <h4>Stock: </h4> {product.stock}
              </span>
              <div className="mt-4 justify-around w-full">
                <button className="btn-add">ADD TO CARD</button>
                <button className="btn-add hover:bg-gray-600 bg-gray-700">
                  BUY NOW

                </button>
              </div>
            </div>
           
          </section>
        )
                }
    </>
  );
};

export default ProductDetails;
