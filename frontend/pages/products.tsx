import {useRouter} from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../src/components/Loading";
import ProductCard from "../src/components/Product/ProductCard";
import Search from "../src/components/Search";
import { fetchAllProducts } from "../src/store/action/productActions";

const ProductPage = () => {
  const [searchLink, setSearchLink] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
const router = useRouter();
  const currentPageChange = (e: SetStateAction<number>) => {
    setCurrentPage(e);
  };

  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state: any) => state.products);

  const dispatch = useDispatch();

  const keyword = router.query.keyword as any;

  useEffect(() => {
    if (keyword) {
      dispatch(fetchAllProducts(currentPage, keyword));
    }
    dispatch(fetchAllProducts(currentPage, keyword));
  }, [dispatch, keyword, currentPage]);

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
            <Search searchLink={searchLink} />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative">
            {products &&
              products.map((product: any) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {resultPerPage < productsCount && (
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={currentPageChange}
              nextPageText="next"
              prevPageText="prev"
              firstPageText="frist"
              lastPageText="last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="activePage"
              activeLinkClass="activePageLink"
            />
          )}
        </section>
      )}
    </>
  );
};

export default ProductPage;
