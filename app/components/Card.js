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
      <>
        <div ref={elementRef} className={`bg-red border border-white h-[auto] w-auto flex ${props.img?'sm:flex-row':'flex-col'} flex-col rounded-md fade-in z-5 bg-gradient-to-t from-black to-gray-900 justify-center items-center`}>
          <div className={`bg-slate-800 m-0.5 ${props.img?"":"w-full"
        }`}>
          <h2 className="text-center text-4xl">{props.title}</h2>
        {props.img?    <img
              src={props.img} className="w-[50vh] p-2 pt-0"
              />:""}</div>
        {props.img? <div className="sm:w-[50vh] w-auto">
            <p className="p-5 m-5">{props.data}</p>
        </div>:<div className="sm:w-[50vh] w-auto h-[50vh] flex justify-center items-center">
            <p className="p-5 m-5">{props.data}</p>
        </div>}
        </div>
        </>
    )
}

export default Card;