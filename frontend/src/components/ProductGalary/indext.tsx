import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useDispatch,useSelector } from "react-redux";
import { fetchAllProducts } from '../../store/action/productActions'
import ProductCard from "./ProductCard";

const ProductGalary = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const {loading,error,products,productsCount } = useSelector((state:any) => state.products)

  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  
  console.log(loading,error,products,productsCount);
if(isLoading)return <p>Loadding</p>

  return (
    <section className="container">
      <div className="mb-5 flex justify-between">
        <h2 className="uppercase font-extrabold text-2xl p-2 text-gray-700">
          Product
        </h2>
        <Link href="#" passHref>
          <button className="text-base text-gray-500 font-thin p-2 flex">
            more{" "}
            <IoIosArrowDroprightCircle className="m-0.5 text-emerald-400" />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative">
        <ProductCard
          title="Head Phone"
          discount={0}
          thumbnile={`https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80`}
          price={300}
          quantity={10}
        />

        <ProductCard
          title="Bicycle"
          rate={3.5}
          discount={0}
          thumbnile={`https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80`}
          price={300}
          quantity={0}
        />

        <ProductCard
          title="White Shoes"
          rate={4}
          discount={12}
          thumbnile={`https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`}
          price={300}
          quantity={5}
        />

        <ProductCard
          title="Watch"
          rate={4.5}
          discount={10}
          thumbnile={`https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80`}
          price={300}
          quantity={5}
        />

        <ProductCard
          title="Head Phone"
          rate={4.5}
          discount={0}
          thumbnile={`https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80`}
          price={300}
          quantity={10}
        />

        <ProductCard
          title="Bicycle"
          rate={4.5}
          discount={0}
          thumbnile={`https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80`}
          price={300}
          quantity={0}
        />

        <ProductCard
          title="White Shoes"
          rate={4.5}
          discount={12}
          thumbnile={`https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`}
          price={300}
          quantity={5}
        />

        <ProductCard
          title="Watch"
          rate={2}
          discount={10}
          thumbnile={`https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80`}
          price={300}
          quantity={5}
        />
      </div>
    </section>
  );
};

export default ProductGalary;
