"use client";

import Image from 'next/image';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { TbBrandPrintables } from "react-icons/tb";
import React, { useState } from 'react';
import { FaRegCircleDot } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import { FaStreetView } from "react-icons/fa6";
import { MdStreetview } from "react-icons/md";
import BadgeIcon from '@mui/icons-material/Badge';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverEnabled, setHoverEnabled] = useState(true);
  const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();
  const sidebarToggle = () =>{ 
      invokeToggleCollapse();
  }

  const toggleHover = () => {
    sidebarToggle();
    setHoverEnabled(!hoverEnabled);
  };

  return (
    <div className="fixed h-screen z-10">
      <div 
        className="h-full bg-gray-800 text-white w-64 transition-width duration-300 p-2"
        style={{ width: isOpen ? '14rem' : '4rem' }}
        onMouseEnter={() => hoverEnabled && setIsOpen(true)}
        onMouseLeave={() => hoverEnabled && setIsOpen(false)}
      >
        <div className="flex items-center justify-start space-x-0">
          {isOpen ? (
            <>
            <Image width={30} height={30} src={"/logo_opencv.png"} alt="logo" /><Image width={80} height={80} src={"/logoTitle.png"} alt="logo" />           
            </>
          ) : (
            <Image width={40} height={40} src={"/logo_opencv.png"} alt="logo" />
          )}
          <button
            className="absolute top-0 right-0 m-2 p-2 text-white font-bold py-1 px-2 rounded"
            onClick={toggleHover}
          >
            {isOpen && (hoverEnabled ? <FaRegCircle /> : <FaRegCircleDot />)}
          </button>            
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <Link href="/table" className="flex items-center p-2 bg-gray-700 hover:bg-gray-600 rounded">
            <TbBrandPrintables />
            {isOpen && <span className="ml-2 font-sans">Table</span>}
          </Link>
          <Link href="/studentSuccessView" className="flex items-center p-2 bg-gray-700 hover:bg-gray-600 rounded">
            <FaStreetView />
            {isOpen && <span className="ml-2 font-sans">Success View</span>}
          </Link>
          <Link href="/profile" className="flex items-center p-2 bg-gray-700 hover:bg-gray-600 rounded">
            <MdStreetview />
            {isOpen && <span className="ml-2 font-sans">Profile</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;