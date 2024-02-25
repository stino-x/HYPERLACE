"use client"
// import React, { useEffect, useRef, useState } from "react";
// import Carousel from '@/components/carousel';
import Image from 'next/image';

export default function MobileHome() {
  return (
    <>
      <h1 className="w-1/3 ml-auto mr-auto mb-5 mt-5 text-3xl text-center cinzel">HYPERLACE</h1>
      <nav className="flex flex-col mb-2">
      <div>
      <div className="search-box relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-black-300">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search"
        />
      </div>
      </div>
      <div className="self-end flex-2 pb-4 relative z-40 content-end">
        <span className="relative top-5 right-0">CONTACT</span>
      </div>  
      </nav>
    <div className=" banner mb-7 bg-[url('/assets/bannermobile.svg')] bg-cover bg-no-repeat bg-center w-full  bg-gray-200 flex items-center justify-center">
      {/* <Image
        src="/assets/banner.svg"
        alt="banner"
        width={300}
        height={300}
        className="max-w-full w-full max-h-full"
      /> */}
      {/* <Image
        src="/assets/logomobile.svg"
        alt="logo"
        width={345}
        height={202}
        className="max-h-202 max-w-345 z-50 ml-5 mt-5"
      /> */}
    </div>
    <div className="category-section">
      <h2 className="roboto">CATEGORIES</h2>
      <div className="grid grid-cols-2 place-items-center">
      <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={0}
        height={0}
        className="max-h-full z-50 border border-solid"
        />
              <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={167}
        height={250}
        className="max-h-full z-50 border border-solid"
        />
              <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={167}
        height={250}
        className="max-h-full z-50 border border-solid"
        />
              <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={167}
        height={250}
        className="max-h-full z-50 border border-solid"
        />
              <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={167}
        height={250}
        className="max-h-full z-50 border border-solid"
        />
              <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={167}
        height={250}
        className="max-h-full z-50 border border-solid"
        />
              <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={167}
        height={250}
        className="max-h-full z-50 border border-solid"
        />
              <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={167}
        height={250}
        className="max-h-full z-50 border border-solid"
        />
      </div>
    </div>
    </>
  );
}