"use client"
// import React, { useEffect, useRef, useState } from "react";
import Carousel from '@/components/carousel';
import { Inter } from "next/font/google";
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <h1 className="w-3/5 ml-auto mr-auto mb-12 mt-5 text-center cinzel text-5xl">HYPERLACE</h1>
      <nav className="flex flex-col items-center mb-3 justify-between">
      <span className="roboto mb-4">FOOTWEARS</span>
      <div className='w-1/2'>
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
      </nav>
    <div className="flex justify-between mb-4">
        <ul className="flex">
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>
        </ul>
        <span>CONTACT</span>
    </div>
    <div className="grid grid-cols-5">
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
              <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={167}
        height={250}
        className="max-h-full z-50 border border-solid"
        />
    </div>
    </>
  );
}