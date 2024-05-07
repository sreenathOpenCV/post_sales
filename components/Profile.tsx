import Image from 'next/image';
import React from 'react';
import  SlidingButtonTabs  from '@/components/Tabs';

const Profile = () => {
  return (
<div className="max-w-full m-2.5 relative rounded-lg overflow-hidden">
  <div className="flex items-center h-[350px] justify-center p-2 bg-cover text-white rounded-lg" style={{ backgroundImage: 'url(background.png)' }}>
  </div>
  <div className="p-2 bg-gray-50 rounded-b-lg mx-10 -mt-10 bg-white shadow-xl rounded-lg">
    <div className='flex'>
    <div>
      <Image 
        width={95} 
        height={95} 
        src="/satyaMallick.png" 
        alt="Profile Image"
        className="w-18 h-18 border-3 p-1 border-white rounded-full"
      />
    </div>
    <div className='flex justify-between w-full mt-4'>
        <div className="ml-4">
          <div className="text-xl font-bold text-light-blue-300">
            Satya Mallick
          </div>
          <div className="text-sm text-black">
            CEO / Co-Founder
          </div>
        </div>
        <div className='w-1/3'>
          <SlidingButtonTabs />
        </div>      
    </div>      
    </div>


    <p className="text-base leading-relaxed text-slate-700 my-5">
      Hi, I'm Alec Thompson. Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
    </p>
    <div className="text-gray-500">
      Mobile: 9492203356
    </div>
  </div>
</div>


  );
};

export default Profile;
