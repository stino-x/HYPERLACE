import Carousel from '@/components/carousel';
import { Inter } from "next/font/google";
import Listitems from '@/components/listitems';
import Image from 'next/image';
import { CgAdidas } from "react-icons/cg";

export default function Page() {
  const carouselNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <h1 className="w-3/5 ml-auto mr-auto mb-12 mt-5 text-center cinzel text-5xl">HYPERLACE</h1>
      <nav className="flex flex-col items-center mb-3 justify-between">
        <span className="roboto mb-4">FOOTWEARS</span>
        <div className='w-40 max-[768px]:w-full'>
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
      <Listitems />
      <div className="item-hints grid grid-cols-5 gap-2 max-[768px]:grid-cols-2">
      {/* <div className="imagecategory figure">
          <Image
            src="/assets/homecarousel/carousel1.svg"
            alt="logo"
            width={167}
            height={250}
            className="max-h-full category border object-cover border-solid"
          />
          <h4 className="imagecategory figcaption roboto z-6"><CgAdidas className="sign relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-opacity-50 z-100" size={120} />Adidas</h4>
      </div> */}
      {carouselNumbers.map((number) => (
        <div key={number} className="imagecategory figure">
          <Image
            src={`/assets/homecarousel/carousel1.svg`}
            alt="logo"
            width={167}
            height={250}
            className="max-h-full category border object-cover border-solid"
          />
          {/* <span className="tooltiptext">Tooltip text</span> */}
          <h4 className="imagecategory figcaption roboto z-6">
            <CgAdidas className="sign relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-opacity-50 z-100" size={120} />
            Adidas
          </h4>
        </div>
      ))}
      </div>
    </>
  );
}
