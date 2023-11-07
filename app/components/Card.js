import React from "react";
import "app/globals.css";
import { useRef, useEffect } from 'react';
import Image from "next/image";

const Card = (props) => {
  console.log(props.img)
    const elementRef = useRef();

    useEffect(() => {
      const element = elementRef.current;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            element.classList.add('active');
            observer.disconnect(); // Stop observing once the animation is triggered
          }
        },
        { threshold: 0.8 } // Adjust the threshold as needed
      );
  
      observer.observe(element);
    }, []);

    return (
        <div ref={elementRef} className="bg-red border border-white h-[auto] sm:w-[auto] w-auto flex rounded-md fade-in z-5 bg-gradient-to-t from-black to-gray-900 flex-col justify-center items-center">
          <div>
        {props.img?    <img
              src={props.img} className="w-[50vh] p-2"
              />:""}</div>
        {props.img? <div className="sm:w-[50vh] w-auto">
            <p className="p-5 m-5">{props.data}</p>
        </div>:<div className="sm:w-[50vh] w-auto h-[50vh]">
            <p className="p-5 m-5">{props.data}</p>
        </div>}
        </div>
    )
}

export default Card;