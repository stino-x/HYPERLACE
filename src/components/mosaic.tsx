"use client"
import Image from 'next/image';

export default function Mosaic() {


  return (
    <div className="hidden min-[768px]:block">
      <div className="collage border-yellow-500 w-full grid grid-rows-3 grid-cols-5 gap-x-2 gap-y-6">
        <div className="border-red-500 col-start-1 col-end-3 row-start-1 row-end-3">
        <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={250}
            className=" bigpicture max-h-full max-w-full h-full w-full category border object-cover border-solid"
          />
        </div>
        <div className="border-red-500">
        <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={250}
            className="max-h-full category border object-cover border-solid"
          />
        </div>
        <div className="border-red-500">
        <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={250}
            className="max-h-full category border object-cover border-solid"
          />
        </div>
        <div className="border-red-500">
        <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={250}
            className="max-h-full category border object-cover border-solid"
          />
        </div>
        <div className="border-red-500">
        <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={250}
            className="max-h-full category border object-cover border-solid"
          />
        </div>
        <div className="border-red-500">
        <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={250}
            className="max-h-full category border object-cover border-solid"
          />
        </div>
        <div className="border-red-500">
        <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={250}
            className="max-h-full category border object-cover border-solid"
          />
        </div>
        <div className="border-red-500">
        <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={250}
            className="max-h-full category border object-cover border-solid"
          />
        </div>
      </div>
      {/* <div className="modal-container absolute ml-auto mr-auto z-100 translate-x-1/2 translate-y-1/2">
      <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={250}
            className="max-h-full max-w-full h-full w-full category border object-cover border-solid"
          />
      </div> */}
    </div>
  );
}
