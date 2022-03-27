import { FC } from "react";
import Footer from "../Footer";
import Narbar from "../Header";

const Layout: FC = ({ children }) => {
  return (
    <>
    <Narbar/>    
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
