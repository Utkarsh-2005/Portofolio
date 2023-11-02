"use client"
import { useState, useRef, useEffect } from "react"
import FOG from "vanta/dist/vanta.fog.min"
import * as THREE from "three"
import { Fullscreen } from "lucide-react";
import Head from "next/head";
import "./globals.css"
import Link from "next/link";
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          highlightColor:0xbedff9,
          midtoneColor:0x8ae5b2,
          lowlightColor: 0x7cd5f7,
          baseColor:0x363c6d,
          blurFactor: 0.6,
          zoom:1,
          speed:1,
          minHeight: 500,
          minWidth: 500,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="overflow-clip flex-column">
          <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => setTheme("light")}>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("dark")}>
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("system")}>
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your Page Title</title>
      </Head>
      <div className="">
        <main className="z-[-1]" ref={vantaRef}></main>
      </div>
 

  <div className="flex top-0 min-h-[400px] w-screen justify-center items-center flex-row">
  <div className="flex justify-center items-center w-max">
    <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold text-4xl text-white sm:text-5xl">This is Utkarsh.</h1>
  </div>
</div>
<div class="relative">
  <div class="absolute top-[-80px] w-full h-20 bg-gradient-to-b from-transparent to-white"></div>
  <p className="text-2xl m-10">i gg gg ggg ggg g gggsa b.tech fbfb ffg dgdf dfdf dfdf</p>
</div>
    </div>
  );
}