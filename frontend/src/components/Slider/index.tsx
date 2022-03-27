/* eslint-disable @next/next/no-img-element */
import { useState,useEffect } from "react";
import { data } from "./sliderData";
import { ColorExtractor } from 'react-color-extractor'
import Image from "next/image";

const loaderImage = () =>{
  return `https://images.unsplash.com/`
}


const Slider = (props:any) => {
  const [current, setCurrent] = useState(0);
  const totalData = data.length;
  const nextSlider = () => {
    setCurrent(current === totalData - 1 ? 0 : current + 1);
  };


  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
 
  setTimeout(() => {
    nextSlider();
  }, 5000);

  clearTimeout();
  // console.log(color)
  return (
    <div className="container">
      {data.map((slide, i) => {
        return (
          <div className="w-full" key={i}>
            {i === current && (
              <div className={`grid grid-cols-1 sm:grid-cols-2 sm:bg-gradient-to-r ${slide.Color}  mix-blend-darken bg-center items-center relative`}>
                <div className={`w-full grid text-right justify-end sm:bg-gradient-to-r bg-[${slide.Color}]`}>
                <Image
                  className={`h-[40vh]  transition-all ease-in-out delay-150`}
                  src={slide.Image}
                  alt={slide.title}
                  width="500" height="500"
                  quality={100}
                  />
                  </div>

                <div
                  className={`w-full  p-3 sm:p-5 absolute pt-5 sm:pt-20  sm:relative grid  place-content-center  text-white items-center`}
                >
                    
                  <h3 className={`${slide.text} font-extrabold text-2xl lg:text-4xl`}>
                    {slide.title}
                  </h3>
                  <p className={`text-xl lg:2xl pb-3 mt-6 ${slide.text}  font-Poppins`}>
                    {slide.description}
                  </p>
                  <div className="w-full justify-between">
                  <button
                    className={`p-2 w-32 text-center text-base mt-2 rounded-sm bg-gradient-to-r from-indigo-600  to-purple-600 hover:from-pink-500 hover:to-yellow-500 `}
                    >
                    {slide.ButtonText}
                  </button>

                      <span className="p-3 ml-8 rounded-sm bg-yellow-600 line-through text-gray-100">30% OFF</span>
                    </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;

// const rendomColor = () => {
//         let color = Math.random() * 255;

//         let rgb = `rgba(${color},${color},${color},0.5)`
//         return rgb
//     }
