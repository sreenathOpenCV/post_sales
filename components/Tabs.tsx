"use client";

import React, { useState } from 'react';

const SlidingButtons = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSetActiveTab = (index:any) => {
    setActiveTab(index);
  };

  return (
    <div className="mx-7 bg-white shadow-md rounded-xl h-12 relative flex items-center border">
      {['Apps', 'Messages', 'Settings'].map((label, index) => (
        <button
          key={label}
          className={`flex-1 h-full rounded-md ${
            activeTab === index ? 'text-black' : 'text-gray-600'
          }`}
          onClick={() => handleSetActiveTab(index)}
        >
          {label}
        </button>
      ))}
      <div
        className="bg-gray-300 text-black flex items-center justify-center shadow-xl border rounded-xl h-8 transition-all duration-300 absolute top-2 left-0"
        style={{ width: '33.33%', left: `${activeTab * 33.33}%` }}
      >
        {['Apps', 'Messages', 'Settings'][activeTab]}
      </div>
    </div>
  );
};

export default SlidingButtons;
