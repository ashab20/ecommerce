import ReactStars from "react-rating-stars-component";
import Loading from "../Loading";

const ProductReviews = ({loading,product}: any) => {


  const stars = {
    edit: true,
    count: 5,
    activeColor: "tomato",
    size: 24,
    isHalf: true,
    value: 4,
  };
  const Reviews = () => {
    return (<>
      {
     

     <section  className="product-reviews">
        {/* <img src={avatar} alt={user} width="100px" className="rounded-lg" /> */}
        <h4 className="subtitle">user</h4>
        <ReactStars {...stars} />
        <span className="text">comment</span>
      </section>
      }
      
      </>
    )
    
};

  return (
    <>{loading ?
      <Loading/>
      :    
    <section className="container mt-32">
        <div className=" review-group">
            <Reviews />
        </div>
            
    </section>}
    </>);
};

ProductReviews.defaultProps = {
  review: {
    user: "User",
    comment:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur earum commodi consequatur consequuntur sapiente? Praesentium iste harum libero, dolore beatae sapiente obcaecati eligendi? Quaerat modi adipisci quibusdam sequi accusantium pariatur.",
    avatar:
      "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
    rating: 3.4,
  },
};

export default ProductReviews;
