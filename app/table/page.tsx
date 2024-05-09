"use client";

import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const page = ({
  path,
  manageData,
  activeStatus,
}: {
  path:string;
  manageData: any;
  activeStatus: boolean;
}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddUser = async () => {

  };
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableRecord, setEditableRecord] = useState({});
  const recordsPerPage = 10;
  const data = Array.from({ length: 20 }, (_, index) => ({
      date: `2024-05-${String(20 - index).padStart(2, '0')}`,
      studentName: `Student ${index + 1}`,
      salesPOC: `POC ${index + 1}`,
      paymentAmount: `$${(100 + index * 10).toFixed(2)}`,
      paymentType: index % 2 === 0 ? 'Credit Card' : 'Check',
      auditStatus: index % 2 === 0 ? 'Pending' : 'Approved',
      auditCount: index % 5 + 1
  }));

  const lastRecordIndex = currentPage * recordsPerPage;
  const firstRecordIndex = lastRecordIndex - recordsPerPage;
  const currentRecords = data.slice(firstRecordIndex, lastRecordIndex);

  const totalPages = Math.ceil(data.length / recordsPerPage);

  const handleEditClick = (record:any) => {
      setEditableRecord(record);
      setIsModalOpen(true);
  };

  const handleChange = (e:any) => {
      const { name, value } = e.target;
      setEditableRecord(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
      console.log("Submitted:", editableRecord);
      setIsModalOpen(false); // Close the modal after submission
  };

  const handlePageChange = (newPage:any) => {
      setCurrentPage(newPage);
  };

  const renderCards = () => (
    currentRecords.map((record, index) => (
      <div key={index} className="bg-white space-y-3 p-4 rounded-lg shadow">
        <div className="text-sm text-gray-700">{record.date}</div>
        <div className="text-sm text-gray-700">{record.studentName}</div>
        <div className="text-sm text-gray-700">{record.salesPOC}</div>
        <div className="text-sm text-gray-700">{record.paymentAmount}</div>
        <div className="text-sm text-gray-700">{record.paymentType}</div>
        <div className="text-sm text-gray-700">{record.auditStatus}</div>
        <div className="text-sm text-gray-700">{record.auditCount}</div>
        <button className="text-sm text-blue-500" onClick={() => handleEditClick(record)}>Edit</button>
      </div>
    ))
  );

  const submitButton = (
    <button onClick={handleAddUser}
    className="relative inline-flex items-center justify-center px-7 py-2 mb-3 overflow-hidden font-medium text-white bg-black shadow-black hover:shadow-2xl transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group"
  >
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
      <svg className="w-6 h-6 bg-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" ></path>
      </svg>
    </span>
    <span className="absolute flex items-center justify-center w-full h-full text-white bg-black font-bold text-md transition-all duration-300 transform group-hover:translate-x-full ease">
      Submit
    </span>
    <span className="relative invisible">Submit</span>
  </button>
  );

  const submitAlert = (
    <div className={`fixed max-sm:top-5 sm:top-5 bg-teal-100 border-l-4 border-teal-500 rounded-lg text-teal-900 px-4 py-3 sm:px-1 sm:py-1 max-sm:px-1 max-sm:py-1 sm:-mr-2 max-sm:-mr-2 shadow-md transition-transform transform  ${showAlert ? 'translate-y-0 m-12' : '-translate-y-full'}`} role="alert">
    <div className="flex">
      <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
      <div>
        <p className="font-bold sm:text-sm">Submitted Successfully</p>
        <p className="text-sm">Your changes has been saved</p>
      </div>
      <IoIosCloseCircleOutline style={{fontSize: "30px", paddingLeft: "10px"}} onClick={()=>setShowAlert(false)}/>
    </div>
  </div>
  );
 
  return (
    <>
      <div className="p-3 bg-white rounded-lg shadow-2xl">
        <h1>Your are either admin or audit user</h1>
        <div className="rounded-lg shadow hidden md:block bg-white">
        <div>
            <table className="w-full overflow-y-scroll">
                <thead className="sticky border-b-2 border-gray-200 bg-gray-700 text-white rounded-t-lg">
                    <tr>
                        <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                        <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Student Name</th>
                        <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Sales POC</th>
                        <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Payment Amount</th>
                        <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Payment Type</th>
                        <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Audit Status</th>
                        <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Audit Count</th>
                        <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Edit</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 max-h-80 overflow-y-scroll">
                    {currentRecords.map((record, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                            <td className="p-3 text-sm text-gray-700">{record.date}</td>
                            <td className="p-3 text-sm text-gray-700">{record.studentName}</td>
                            <td className="p-3 text-sm text-gray-700">{record.salesPOC}</td>
                            <td className="p-3 text-sm text-gray-700">{record.paymentAmount}</td>
                            <td className="p-3 text-sm text-gray-700">{record.paymentType}</td>
                            <td className="p-3 text-sm text-gray-700">{record.auditStatus}</td>
                            <td className="p-3 text-sm text-gray-700">{record.auditCount}</td>
                            <td className="p-3 text-sm text-gray-700">
                                <button onClick={() => handleEditClick(record)}>
                                    <MoreVertIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center my-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`mx-1 p-2 text-sm ${currentPage === index + 1 ? 'text-black' : 'text-gray-400'}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <DialogTitle>Edit Record</DialogTitle>
                <DialogContent>
                    <form>
                        {Object.entries(editableRecord).map(([key, value]) => (
                            <TextField
                                key={key}
                                name={key}
                                label={key.charAt(0).toUpperCase() + key.slice(1)}
                                value={value}
                                onChange={handleChange}
                                margin="dense"
                                fullWidth
                            />
                        ))}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} color="primary">Submit</Button>
                </DialogActions>
            </Dialog>
        </div>

          <div className="sticky bottom-0 right-1 flex flex-end justify-end mr-2">{submitButton}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {renderCards()}
        </div>
        <div className="sticky bottom-0 right-1 flex flex-end justify-end m-2 lg:hidden md:hidden">{submitAlert}{submitButton}</div>
      </div>
    </>
  );
};

export default page;