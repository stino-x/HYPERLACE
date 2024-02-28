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
      <div className="flex justify-between mb-4">
        <ul className={`flex flex-wrap gap-3${showAllItems ? 'max-h-12' : ''}`}>
          {items.map((item) => (
            <li key={item.id} className="roboto menu-link font-thin hover:font-bold">
              {item.text}
            </li>
          ))}
            <li>
            <IoIosArrowForward
              className="text-2xl cursor-pointer transform rotate-90-left-cw"
              onClick={toggleShowAllItems}
             />
            </li>
        </ul>
        <span className="hover:font-bold contact pointer max-[768px]:hidden">CONTACT</span>
      </div>
    </>
  );
}
