"use client"
import { useState, useRef, useEffect } from "react"
import FOG from "vanta/dist/vanta.fog.min"
import * as THREE from "three"
import { Fullscreen } from "lucide-react";
import Head from "next/head";
import "./globals.css"
import Link from "next/link";
import * as React from "react"
import Card from "./components/Card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [illumminate, setIlluminate] = useState(false);
  const vantaRef = useRef(null);
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 400) {
        setIlluminate(true);
        setIsScrolled(false);
      } else {
        setIlluminate(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          highlightColor:0xbedff9,
          midtoneColor:0x8ae5b2,
          lowlightColor: 0x7cd5f7,
          baseColor:0x363c6d,
          blurFactor: 0.6,
          zoom:1,
          speed:1,
          minHeight: 2000,
          minWidth: 500,
        })
      );
    }
    return () => {
      if (vantaEffect) 
      {
        vantaEffect.destroy();}
    };
  }, [vantaEffect]);
  return (
    <> 
    <div className="overflow-clip flex-column" ref={vantaRef}>
        {/* <div className="z-[-1]" ref={vantaRef}></div> */}
      <div className={`z-[2] backdrop-blur-md flex flex-row top-0 text-white p-5 bg-black bg-opacity-10 bg-blur-50 sticky navbar ${illumminate ? 'illumminate' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <button className="mr-auto bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Resume</button>
        <p className="ml-auto md:mr-3 p-1">About me</p>
        <p className="ml-3 md:ml-10 p-1 hidden sm:block">Contact</p>
      </div>
  <div className="flex top-0 min-h-[400px] w-screen justify-center items-center flex-row">
  <div className="flex justify-center items-center w-max">
    <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold text-4xl text-white sm:text-5xl">This is Utkarsh.</h1>
  </div>
</div>
<div class="relative bg-black">
  <div class="absolute top-[-80px] w-full h-20 bg-gradient-to-b from-transparent to-black"></div>
</div>
    <div className="p-40 bg-black flex justify-center items-center h-500">
      <section className="grid text-white place-items-center align-content-center space-y-40">
            <Card img="/profile.jpg" data="I am Second Year B.Tech Student in KIIT University. I am passionate about Web Development." title="About me"/>
            <Card title="Skills" data="HTML, CSS, JS, ReactJS, NextJS, MongoDB, Flask, Tailwind CSS, Bootstrap, MySQL."/>
      </section>
 
  
    </div>
    </div>
    </>
)}
