import Mosaic from '@/components/mosaic';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="max-[768px]:min-h-[50vh] overflow-hidden">
      <h1 className="w-3/5 ml-auto mr-auto mb-[5%] mt-5 text-center cinzel text-5xl max-[768px]:text-3xl">HYPERLACE</h1>
      <Mosaic />
      <div className="hidden min-[768px]:block modal-container fade-in-bottom  max-h-full w-[50%] h-[80%] fixed top-[50%] left-[50%] right-[50%] bottom-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <div className="grid w-full h-full grid-cols-1 grid-rows-1">
          <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={250}
            className="hidden min-[768px]:inline max-h-full max-w-full h-full w-full bigpicture border object-cover border-solid col-start-1 col-end-1 row-start-1 row-end-1 md:w-[100%]"
          />
        </div>
      </div>
      <div className="hidden min-[768px]:block overlay fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] w-full h-full"></div>
        <div className="hidden max-[768px]:grid place-items-center m-auto relative w-[100%] min-h-[50vh] h-auto">
        <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={1}
            className="hidden max-[768px]:inline single m-auto w-[100%] h-[80%]"
          />
        </div>
    </div>
  );
}
