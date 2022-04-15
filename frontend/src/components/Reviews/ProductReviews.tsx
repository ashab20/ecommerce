import ReactStars from "react-rating-stars-component";
import Loading from "../Loading";
import React,{useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import { fetchProducts,clearEror } from "../../store/action/productActions";
import Router from "next/router";

interface rootState{
  product:any;
}
const ProductReviews = ({reviews}:any) => {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if(error){
  //     dispatch(clearEror());
  //     console.log(error);
      
  //   }
    
  //   dispatch(fetchProducts(Router.query.product));
  // }, [dispatch, product,error]);
  const stars = {
    edit: true,
    count: 5,
    activeColor: "tomato",
    size: 24,
    isHalf: true,
    value: reviews.rating
  };
 
return (      
    <section className="container mt-32">
        <div className=" review-group">
            <div  className="product-reviews">            
            <h4 className="subtitle">{reviews.name}</h4>
            <ReactStars {...stars} />
            <span className="text">{reviews.comment}</span>  
               
          </div>
        </div>
            
    </section>);
}

ProductReviews.defaultProps = {
  reviews: {
    user: "User",
    comment:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur earum commodi consequatur consequuntur sapiente? Praesentium iste harum libero, dolore beatae sapiente obcaecati eligendi? Quaerat modi adipisci quibusdam sequi accusantium pariatur.",
    avatar:
      "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
    rating: 3.4,
  },
};

export default ProductReviews;
