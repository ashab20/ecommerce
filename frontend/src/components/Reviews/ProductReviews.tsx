import ReactStars from "react-rating-stars-component";
import avatar from "../../../public/avatar.svg";
import Image from "next/image";

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
    edit: false,
    count: 5,
    activeColor: "tomato",
    size: 24,
    isHalf: true,
  };
 const ReviewComment = () => 
  reviews.map((r:any) => {
   return (      
    <section key={r.user} className="">
        <div className=" review-group">
          <div  className="product-reviews">  
            <Image src={avatar} alt={r.name} width="100%" height="100%"/>          
            <h4 className="subtitle">{r.name}</h4>
            
            <ReactStars  {...stars} value={r.rating}  />
            
            <span className="text">{r.comment}</span>  
               
          </div>
        </div>
            
    </section>);
 })


 ReviewComment.defaultProps = {
  r: {
    user: "User",
    comment:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur earum commodi consequatur consequuntur sapiente? Praesentium iste harum libero, dolore beatae sapiente obcaecati eligendi? Quaerat modi adipisci quibusdam sequi accusantium pariatur.",
    avatar:
      "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
    rating: 3.4,
  },
};

return <div className="container review mt-20">
  <h2 className="title">Reviews:</h2>
  <ReviewComment/>
  </div>


}


export default ProductReviews;
