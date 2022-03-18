const Footer = () => {
  return (
    <section className="absolute w-[100vw] bottom-0 bg-gray-600 h-96 text-white">
      <div className="h-36">

      </div>
      <hr />
      <div className="text-[.8rem] pl-7 pt-3 font-Montserrat">
          copyright &copy; {Date().substring(11,15)}  <br />
                <h4>Ecommerce Website by <span className="border-dotted border-b-2 border-gray-400"> ASHAB UDDIN</span></h4>
      </div>
    </section>
  );
};

export default Footer;
