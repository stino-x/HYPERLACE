// import React, { useEffect, useRef, useState } from "react";
import Carousel from '@/components/carousel';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1 className="w-24 m-auto">HYPERLACE</h1>
      <nav className="flex items-center justify-between">
      <div className='max-w-md'>
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
        <span>Contacts</span>
      </nav>
    <div className=" bg-[url('/assets/banner.svg')] w-full h-352 bg-gray-200 flex items-center justify-center">
      {/* <Image
        src="/assets/banner.svg"
        alt="banner"
        width={300}
        height={300}
        className="max-w-full w-full max-h-full"
      /> */}
      <Image
        src="/assets/logo.svg"
        alt="logo"
        width={300}
        height={300}
        className="max-h-full z-50 ml-5"
      />
    </div>
    <div>
      <h2>Categories</h2>
      <Carousel />
    </div>
    </>
  );
}