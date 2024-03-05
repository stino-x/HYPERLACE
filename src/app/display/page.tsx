import Mosaic from '@/components/mosaic';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <h1 className="w-3/5 ml-auto mr-auto mb-[5%] mt-5 text-center cinzel text-5xl">HYPERLACE</h1>
      <Mosaic />
      <div className="modal-container max-h-full w-3/4 h-full absolute top-[50%] left-[50%] right-[50%] bottom-[50%] translate-x-[-50%] translate-y-[-10%] z-10">
        <div className="grid w-full h-full grid-cols-1 grid-rows-1">
          <Image
            src={`/assets/picturegrid.svg`}
            alt="logo"
            width={167}
            height={250}
            className="max-h-full max-w-full h-full w-full bigpicture border object-cover border-solid col-start-1 col-end-1 row-start-1 row-end-1 md:w-[100%]"
          />
        </div>
      </div>
      <div className="overlay fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] w-full h-full"></div>
    </div>
  );
}
