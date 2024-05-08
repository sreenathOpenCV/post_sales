"use client";

import Image from 'next/image';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { SiFiles } from "react-icons/si";
import React, { useState } from 'react';
import { FaRegCircleDot } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
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
    <div className="absolute h-screen z-10">
      <div 
        className="h-full bg-gray-800 text-white w-64 transition-width duration-300 p-2"
        style={{ width: isOpen ? '14rem' : '4rem' }}
        onMouseEnter={() => hoverEnabled && setIsOpen(true)}
        onMouseLeave={() => hoverEnabled && setIsOpen(false)}
      >
        <div className="flex items-center justify-start space-x-2">
          {isOpen ? (
            <>
            <Image width={40} height={40} src={"/logo_opencv.png"} alt="logo" /><Image width={100} height={100} src={"/logoTitle.png"} alt="logo" />           
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
          <Link href="/" className="flex items-center p-2 bg-gray-700 hover:bg-gray-600 rounded">
            <ClearAllIcon />
            {isOpen && <span>Table</span>}
          </Link>
          <Link href="/profile" className="flex items-center p-2 bg-gray-700 hover:bg-gray-600 rounded">
            <AccountCircleOutlinedIcon />
            {isOpen && <span>Profile</span>}
          </Link>
          <Link href="/studentSuccessView" className="flex items-center p-2 bg-gray-700 hover:bg-gray-600 rounded">
            <AccountCircleOutlinedIcon />
            {isOpen && <span>Student View</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;