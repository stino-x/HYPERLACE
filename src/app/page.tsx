"use client"
// import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from '@react-hook/media-query';
// import Carousel from '@/components/carousel';
import DesktopHome from '@/components/desktophome';
import MobileHome from '@/components/mobilehome';
// import Image from 'next/image';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      {isMobile ? (
        <MobileHome />
      ) : (
        <DesktopHome />
      )}
    </div>
  );
}
