import React, { useState, useMemo, ChangeEvent } from 'react';
import Carousel from '@/components/carousel';
import SearchBox from '@/components/searchBox'
import Image from 'next/image';
import shoebrands from '../data/shoebrands.js';

export default function DesktopHome() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  interface ShoeBrand {
    name: string;
    image: string;
    versions: {
      name: string;
      details: {
        amountAvailable: number;
        price: number;
      };
    }[];
  }

  const filteredShoeBrands: ShoeBrand[] = useMemo(() => {
    return shoebrands.brands.filter((brand: ShoeBrand) => {
      return brand.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);
  return (
    <>
      <h1 className="w-3/5 ml-auto mr-auto mb-3 mt-5 text-center cinzel text-5xl">HYPERLACE</h1>
      <nav className="flex items-center mb-3 justify-between">
        <div className='max-w-md'>
          <SearchBox searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
        </div>
        <span className="roboto">CONTACT</span>
      </nav>
      <div className="banner bg-[url('/assets/banner.svg')] mb-6 w-full h-352 bg-gray-200 bg-cover bg-no-repeat bg-center flex items-center justify-center">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={300}
          height={300}
          className="max-h-full z-50 ml-5 relative top-8"
        />
      </div>
      <Carousel shoebrands={filteredShoeBrands} />
    </>
  );
}
