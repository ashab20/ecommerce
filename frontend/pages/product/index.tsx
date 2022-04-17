import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../src/components/Loading";
import ProductCard from "../../src/components/Product/ProductCard";
import Search from "../../src/components/Search";
import { fetchAllProducts } from "../../src/store/action/productActions";

const ProductPage = () => {
  const [searchLink, setSearchLink] = useState(true);

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
        <section className="container mt-10 mb-20">
          <div className="mb-12 flex-col sm:flex-wrap justify-between  relative p-2">
            <h2 className="title">Product</h2>
            <Search searchLink={searchLink} history={history} />
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

export default ProductPage;
