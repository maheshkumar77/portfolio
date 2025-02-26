"use client"
import { useState, useEffect } from "react";
import {motion} from 'framer-motion'
import '../css/snewtyle.css'
const HoverEffect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = ["🙌 Hello, ", "welcome", "to my", "portfolio.! "];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [items.length]);

  return (
    <div className="flex justify-center items-center h-auto w-full lg:mt-[-50px] mt-[-30px] mb-[-50px]">
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      className="flex justify-center items-center flex-wrap w-[50%] h-32">
        {items.map((item, index) => (
          <div
          id="m"
            key={index}
            className="flex justify-center items-center transition-all duration-300 ease-in-out mx-2 my-0 relative"
            style={{
              width: currentIndex === index ? "43%" : "5%",
              opacity: currentIndex === index ? "1" : "0",
              cursor: currentIndex === index ? "pointer" : "default", }}
          >
            
            <div
            id="k"
              className="flex justify-center items-center h-auto bg-transparent rounded-2xl overflow-hidden px-3 absolute"
              style={{
                width: "99%", 
              }}
            >
              <p className="lg:text-3xl md:text-2xl text-xl font-bold text-white m-0">{item}</p>
            </div>
          </div>
      
        ))}
      </motion.div>
    </div>
  );
};

export default HoverEffect;
