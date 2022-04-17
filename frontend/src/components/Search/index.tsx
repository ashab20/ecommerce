import {useRouter} from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Loading from "../Loading";

const Search = ({ searchLink }: any) => {
  const [search, setSearch] = useState("");
  const router = useRouter()

  const searchHandler = (e: any) => {
    e.preventDefault();

    if (router.isFallback) {
      return <div><Loading/></div>
    }

    if (search.trim()) {
       router.push({
       pathname: "/products",
       query: { keyword:search } },
      `/products/${search}`
    );
    } else {
      router.push({
        pathname: "/products",
        query: { keyword:"" } },        
       `/products`
      )}
  };

  return (
    <div
      style={{ margin: "10px auto" }}
      className={`${
        !searchLink
          ? "fixed z-20 top-12 right-2 mr-5 lg:mr-16  mt-6 "
          : " relative "
      }  w-full lg:w-[30%]  transition-all ease-in-out delay-150`}
    >
      <form
        className="border-[1px] p-2 rounded-md items-center justify-between flex"
        onSubmit={searchHandler}
      >
        <input
          className="text-base font-thin w-[90%] outline-none p-1"
          type="search"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="outline-none text-gray-500 items-center text-xl"
          type="submit"
        >
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
