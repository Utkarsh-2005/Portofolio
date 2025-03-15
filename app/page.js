"use client"
import { useState, useRef, useEffect } from "react"
import FOG from "vanta/dist/vanta.fog.min"
import * as THREE from "three"
import "./globals.css"
import Link from "next/link";
import * as React from "react";
import Card from "./components/Card";
import ShowCase from "./components/ShowCase"
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Head from "next/head";
import BookModal from "./components/BookModal"


export default function Home() {

  SwiperCore.use([Pagination, Navigation, Autoplay]);

  const [vantaEffect, setVantaEffect] = useState(0);
  const [illumminate, setIlluminate] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const vantaRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 400) {
        setIlluminate(true);
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showModal && (
        <BookModal onClose={() => setShowModal(false)} />
      )}
    <div className="overflow-clip flex-column" ref={vantaRef}>
      <div className={`z-[2] backdrop-blur-md flex flex-row top-0 text-white p-5 bg-black bg-opacity-10 bg-blur-50 sticky navbar ${illumminate ? 'illumminate' : ''} scrolled`}>
        <a className="mr-auto bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" href="https://drive.google.com/file/d/1WUdeuCX-4wbDKQURBhT31-mwfrcNjy5t/view?usp=sharing" target="_blank" 
  rel="noopener noreferrer">Resume</a>
        <Link href="#about">
        <p className="ml-auto md:mr-3 p-1 hidden sm:block">About me</p>
        </Link>
        <Link href="#contact">
        <p className="ml-3 md:ml-10 p-1">Contact</p>
        </Link>
      </div>
  <div className="flex top-0 min-h-[400px] w-screen justify-center items-center flex-row">
  <div className="flex justify-center items-center w-max">
    <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold text-4xl text-white sm:text-5xl">This is Utkarsh.</h1>
  </div>
</div>
<div className="relative bg-black">
  <div className="absolute top-[-80px] w-full h-20 bg-gradient-to-b from-transparent to-black"></div>
</div>
    <div className="bg-black flex justify-center items-center h-500 flex-col p-40">
      <section className="grid text-white place-items-center align-content-center space-y-35">
            <div id="about">
            <Card img="/profile.jpg" data="I am Third Year B.Tech Student in KIIT University. I am a Full Stack Developer. Currently, I am expanding my DevOps skills and interested in AI, UI/UX and Design." title="About me"/>
            </div>
            <div id="skills" className="space-y-20">
            <Card title="Frontend Skills" data="React.js, Next.js, Typescript, Tailwind, Bootsrap, Material Ui"/>
            <Card title="Backend Skills" data="ExpressJS, NodeJS, Flask, NextJS API Routes"/>
            <Card title="Databases" data="MongoDB, PostgreSQL, Firebase, AstraDB"/>
            </div>
            <div className="w-screen sm:max-w-screen-md sm:p-[5vh] overflow-hidden sm:mt-20 m-10">
            <h1 className="text-white text-4xl sm:mb-[-20vh] mb-[-15vh] text-center mt-20 sm:mt-0">Projects</h1>
      <Swiper
      slidesPerView={1}
      loop
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}>
       <SwiperSlide>
      <ShowCase link="https://linkedboost.vercel.app/" repo="https://github.com/Utkarsh-2005/LinkedBoost" img="/linkedboost.png" data="A platform to evaluate your LinkedIn profile and posts from your URL with AI-driven insights. Built with Next.js, TypeScript, Tailwind CSS, Prisma/MongoDB, Astra DB, and NextAuth. Uses Gemini-powered RAG to identify improvement areas."/>
      </SwiperSlide>
      <SwiperSlide>
      <ShowCase link="https://briefbuzz.vercel.app/" repo="https://github.com/Utkarsh-2005/BriefBuzz" img="/briefbuzz.png" data="A daily news web-app with over 50 active users leveraging the power of Gemini to deliver concise reports. Completely built on NextJS including the backend."/>
      </SwiperSlide>
      <SwiperSlide>
      <ShowCase link="https://chai2go.vercel.app/" repo="https://github.com/Utkarsh-2005/Chai2Go_Frontend" img="/chai2go.png" data="An ordering system with a robust admin panel created using ViteJS, TypeScript, TailwindCSS and Socket. Secured authentication with JWT."/>
      </SwiperSlide>
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
    <footer className="footer" id="contact">
    {/* <div className="waves">
      <div className="wave" id="wave1"></div>
    </div> */}
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/Utkarsh-2005">
          <img src="/github.png" className="h-[28px] mb-[2px]"></img>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/utkarsh-jha-002b23266/">
      <img src="/linkedin.png" className="h-[28px] mb-[2px]"></img>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/utkarsh.905/">
      <img src="/instagram.png" className="h-[28px] mb-[2px]"></img>
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#about">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#skills">Skills</a></li>
      <li className="menu__item"><a className="menu__link cursor-pointer" onClick={() => setShowModal(true)}
      >Contact</a></li>
    </ul>
    <p>&copy;2023 Utkarsh Jha | All Rights Reserved</p>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@^7.2.2/dist/ionicons/ionicons.esm.js"></script>
    </div>
    </div>
    </>
)}
