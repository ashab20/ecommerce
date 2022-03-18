import type { NextPage } from "next";
import Meta from "../components/Meta";
const Home: NextPage = () => {
  return (
    <>
      <Meta title="Home Page" keyword="Home Page, Online shop" description="Choich your favurite product" />
      <section className="text-red-500">
        <h1>this is main</h1>
      </section>
    </>
  );
};

export default Home;
