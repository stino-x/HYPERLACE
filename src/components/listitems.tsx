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
    // Add more items as needed
  ];

  const [showAllItems, setShowAllItems] = useState(false);

  const toggleShowAllItems = () => {
    setShowAllItems(!showAllItems);
  };

  return (
    <>
      {/* flex items-center w-2/3 flex-wrap gap-3 BREAKPOINT FOR LIST */}
      <div className="flex justify-between mb-4">
        <ul className="flex items-center gap-3">
          {items.map((item) => (
            <li key={item.id} className="roboto menu-link font-thin hover:font-bold">
              {item.text}
            </li>
          ))}
            <li className="flex" onClick={toggleShowAllItems}>
            <span className="roboto">{showAllItems ? 'LESS' : 'MORE'}</span>  
            <IoIosArrowForward
              className={`text-2xl flex-2 cursor-pointer transform ${showAllItems ? 'rotate-90-left-cw' : 'rotate-90-right-cw'}`}
             />
            </li>
        </ul>
        <span className="hover:font-bold contact row-span-1 pointer max-[768px]:hidden">CONTACT</span>
      </div>
    </>
  );
}
