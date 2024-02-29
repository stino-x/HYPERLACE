"use client"
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface ListItem {
  id: number;
  text: string;
}

export default function Listitems() {
  const items: ListItem[] = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 5' },
    { id: 6, text: 'Item 6' },
    { id: 7, text: 'Item 7' },
    { id: 8, text: 'Item 8' },
    { id: 9, text: 'Item 9' },
    { id: 10, text: 'Item 10' },
    // { id: 11, text: 'Item 11' },
    // { id: 12, text: 'Item 12' },
    // { id: 13, text: 'Item 13' },
    // { id: 14, text: 'Item 14' },
    // { id: 15, text: 'Item 15' },
    // { id: 16, text: 'Item 16' },
    // { id: 17, text: 'Item 17' },
    // { id: 18, text: 'Item 18' },
    // { id: 19, text: 'Item 19' },
    // { id: 20, text: 'Item 20' },
  ];
  

  const [showAllItems, setShowAllItems] = useState(false);

  const toggleShowAllItems = () => {
    setShowAllItems(!showAllItems);
  };

  return (
    <>
      {/* flex items-center w-2/3 flex-wrap gap-3 BREAKPOINT FOR LIST */}
      {/* className={` ${showAllItems && items.length > 6 ? 'grid grid-cols-2 grid-rows-2' : 'flex justify-between mb-4'}`} */}
      {/* flex justify-between mb-4 */}
      {/* grid grid-cols-2 grid-rows-2 */}
      <div className='flex justify-between mb-4'>
      <ul className={` ${showAllItems && items.length > 5 ? 'grid grid-rows-2' : 'flex items-center gap-3'} ${showAllItems && items.length > 10 ? 'grid grid-rows-3' : 'flex items-center gap-3'}`}>
        {items.map((item: ListItem, index: number) => (
          <li key={item.id} className={`roboto menu-link font-thin hover:font-bold ${index > 5 && !showAllItems ? 'hidden' : ''} ${index >= 5 && showAllItems ? 'slide-in-top' : ''} ${index < 5 ? 'row-start-1 row-end-1' : ''} ${index >= 5 && index <= 10 ? 'row-start-2 row-end-2' : index > 12 ? 'row-start-3 row-end-3 w-24' : ''}`}>
            {item.text}
          </li>
        ))}
        <li className='flex' onClick={toggleShowAllItems}>
          <span className="roboto">{showAllItems ? 'LESS' : 'MORE'}</span>  
          <IoIosArrowForward
            className={`flex-2 w-6 h-6 cursor-pointer transform ${showAllItems ? 'rotate-90-left-cw' : 'rotate-90-right-cw'}`}
          />
        </li>
      </ul>

        <span className="hover:font-bold contact row-span-1 pointer justify-self-end max-[768px]:hidden">CONTACT</span>
      </div>
    </>
  );
}
