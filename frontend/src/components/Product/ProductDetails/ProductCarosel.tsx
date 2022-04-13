/* eslint-disable @next/next/no-img-element */
import ImageLink from "/public/product/sheoBelt.jpg";
import Image from "next/image";

const ProductCarosel = ({ImageLink}:any) => {
  return (
    <div>
      <img src={ImageLink} alt="product" height="100%" width="100%" />
    </div>
  )
}

ProductCarosel.defualtProps ={
  ImageLink:"public/product/headphone.jpg"
}

export default ProductCarosel