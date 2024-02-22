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
    <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
      <Image
        src="/path/to/your/image.jpg"
        alt="Description of your image"
        width={300}
        height={300}
        className="max-w-full max-h-full"
      />
      <Image
        src="/path/to/your/image.jpg"
        alt="Description of your image"
        width={300}
        height={300}
        className="max-w-full max-h-full"
      />
    </div>

    </>
  );
}
