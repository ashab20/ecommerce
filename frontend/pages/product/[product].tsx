import React from 'react'
import Router from "next/router";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { clearEror, fetchProducts } from "../../src/store/action/productActions";
import Delivary from '../../src/components/Delivary'
import ProductReviews from '../../src/components/Reviews/ProductReviews'
import ProductDetails from "../../src/components/Product/ProductDetails";
import Loading from '../../src/components/Loading';


interface rootState{
  product:any;
}

const Product = () => {
   
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {loading , error, product} = useSelector((state: rootState) => state.product
  );
// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useDispatch();
  //  console.log(Router.query)

 
  // const {name,rating,price,image,_id,description,reviews,stock,catogory,numOfReviws,} = product;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if(error){
      dispatch(clearEror());
      console.log(error);
      
    }
   
      dispatch(fetchProducts(Router.query.product));
    
  }, [dispatch,error]);

  
  
  return (<>
  {loading ? 
    <div className="container items-center ">
    <Loading />
  </div>
  : <>  
    <ProductDetails product={product} loading={loading}/>
    <Delivary/>
    {loading === false ? product && 
    <ProductReviews  reviews={product.reviews}/>
    : (<h4> No review </h4>)
    }
    </>
    }
  </>)
}

export default Product