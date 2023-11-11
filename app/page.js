"use client"
import { useState, useRef, useEffect } from "react"
import FOG from "vanta/dist/vanta.fog.min"
import * as THREE from "three"
import { Fullscreen } from "lucide-react";
import Head from "next/head";
import "./globals.css"
import Link from "next/link";
import * as React from "react";
import Card from "./components/Card";
import ShowCase from "./components/ShowCase"
import { Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function Home() {
  SwiperCore.use([Pagination, Navigation]);

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
    <div className="bg-black flex justify-center items-center h-500 flex-col p-40">
      <section className="grid text-white place-items-center align-content-center space-y-40">
            <Card img="/profile.jpg" data="I am Second Year B.Tech Student in KIIT University. I am passionate about Web Development." title="About me"/>
            <Card title="Skills" data="HTML, CSS, JS, ReactJS, NextJS, MongoDB, Flask, Tailwind CSS, Bootstrap, MySQL."/>
            <div className="w-screen lg:p-[35vh] overflow-hidden">
            <h1 className="text-white text-4xl mb-[-30vh] text-center">Projects</h1>
      <Swiper
      slidesPerView={1}
      loop
      navigation={true}>
      <SwiperSlide>
      <ShowCase link="https://portofolio-sigma-liart.vercel.app/" repo="https://github.com/Utkarsh-2005/Portofolio" img="/portofolio.png" data="This is my portfolio site created using NextJS, TailwindCSS and TypeScript. It is fully responsive and implements external libraries like Three.JS, Vanta.JS and Swiper.JS. "/>
      </SwiperSlide>
      <SwiperSlide>
      <ShowCase link="https://utkarshflix.netlify.app/" repo="https://github.com/Utkarsh-2005/Utkarsh-flix" img="/utkarshflix.png" data="This is a clone of the Netflix landing page created with ReactJS and an API from RapidAPI and implements concepts like filtering and API calls."/>
      </SwiperSlide>
    </Swiper>
    </div>
    </section>
    
    </div>
    <div>
    <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      {/* <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li> */}
      {/* <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li> */}
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com/in/utkarsh-jha-002b23266/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.instagram.com/utkarsh.905/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

    </ul>
    <p>&copy;2023 Utkarsh Jha | All Rights Reserved</p>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
    </div>
    </>
)}
