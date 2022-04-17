import Link from "next/link";
import { useEffect } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../store/action/productActions";
import Loading from "../../Loading";
import ProductCard from "../ProductCard";

const HomeProduct = () => {
  const { loading, error, products, productsCount } = useSelector(
    (state: any) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="container items-center ">
          <Loading />
        </div>
      ) : (
        <section className="container mt-40 mb-20">
          <div className="mb-12 flex justify-between">
            <h2 className="title">Product</h2>
            <Link href="/product" passHref>
              <button className="text-base text-gray-500 font-thin p-2 flex">
                {productsCount - 8} more
                <IoIosArrowDroprightCircle className="m-0.5 text-emerald-400" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative">
            {products &&
              products.map((product: any) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </section>
      )}
    </>
  );
};

export default HomeProduct;
