import React from 'react';

function GlassEffectSearchBar() {
  return (
    <div className="bg-gray-300">
                <div className="container h-screen mx-auto flex justify-center items-center p-2 md:p-0">
                    <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                                <div className="flex border rounded bg-gray-300 items-center p-2 ">
                                    <svg className="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path className="heroicon-ui"
                                              d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 1 1-1.42-1.4L18.6 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-4.3 4.3z"/>
                                    </svg>
                                    <input type="text" placeholder="Enter text here..."
                                           className="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center"><button className="p-2 border w-1/4 rounded-md bg-gray-800 text-white">Search</button></div>
                    </div>
                </div>
            </div>
  );
}

export default GlassEffectSearchBar;
