import type { NextPage } from "next";
import Meta from "../src/components/Meta";
import Slider from "../src/components/Slider";
import BestSell from '../src/components/BestSell';
import ProductGalary from "../src/components/ProductGalary/indext";
import Proccess from "../src/components/Process";
import Delivary from "../src/components/Delivary";

const Home: NextPage = () => {

  return (
    <>
      <Meta title="Home Page" keyword="Home Page, Online shop" description="Choich your favurite product" />
      <section className="">
        <Slider />
        <BestSell/>    
        <ProductGalary/>
        <Proccess />
      </section>
    </>
  );
};

export default Home;
