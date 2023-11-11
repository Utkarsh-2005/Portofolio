"use client"

import React from "react";
import "app/globals.css";
// import { useRouter } from 'next/router';


const ShowCase = (props) => {
    // const router = useRouter();
    // // Function to handle button click and redirect
    // const handleGit = () => {
    //   // Specify the link you want to redirect to
    //   const redirectUrl = "https://github.com/Utkarsh-2005/Portofolio";
  
    //   // Use the push method to redirect
    //   router.push(redirectUrl);
    // };

    return(
        <>
        <div className="bg-black border border-white h-[auto] w-auto flex flex-col rounded-md m-20 mt-60 overflow-hidden">
        <div className="relative">
        <div className="flex bottom-0 z-5 absolute p-2 space-x-3 justify-center items-center w-full bg-black bg-opacity-50 backdrop-blur-sm">
            <a href={props.link}>
            <img src="/baseline_link_white_24dp.png" className="logo h-[35px]"/>
            </a>
            <a href={props.repo}>
            <img src="/github.png" className="logo h-[30px]"/>
            </a>
        </div>
        <img src={props.img} className="min-w-[45vh] sm:min-w-[50vh]"/>
        </div> 
        <div>
        <p className="text-white h-auto sm:h-[20vh] flex justify-center items-center p-5 text-sm sm:text-base">{props.data}</p>
        </div>
        </div>
        </>
    )
}

export default ShowCase;