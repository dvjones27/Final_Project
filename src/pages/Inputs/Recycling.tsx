import React from 'react';
// import '../assets/static/sytles.css';

function Recycling() {
  return (
    <div className="flex flex-col bg-slate-400 p-3 justify-items-center w-auto text-lg items-center h-auto">
      <h1 className="title">Recycling</h1>
      
        <label htmlFor="recycle_questions" className="block m-2 text-md justify-items-center font-medium text-gray-900 dark:text-white">Select Your Daily Recycling Options</label>
        <select multiple id="recycle_paper" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Did you recycle paper today?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        
        <label htmlFor="recycle_paper_amount" className="block m-2 text-sm font-medium text-gray-900 dark:text-white justify-center">How much paper did you recycle today?</label>
          <input type="text" id="recycle_paper_amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="# of lbs" required>
          </input>
        
        <label htmlFor="recycle_glass" className="block m-2 text-sm font-medium text-gray-900 dark:text-white"></label>
        <select multiple id="recycle_glass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Did you recycle glass today?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        
        <label htmlFor="recycle_glass_amount" className="block m-2 text-sm font-medium text-gray-900 dark:text-white justify-center">How much glass did you recycle today?</label>
          <input type="text" id="recycle_glass_amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="# of lbs" required>
          </input>
        
        <label htmlFor="recycle_plastic" className="block m-2 text-sm font-medium text-gray-900 dark:text-white"></label>
        <select multiple id="recycle_plastic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Did you recycle plastic today?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        
        <label htmlFor="recycle_plastic_amount" className="block m-2 text-sm font-medium text-gray-900 dark:text-white justify-center">How much paper did you recycle today?</label>
          <input type="text" id="recycle_plastic_amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="# of lbs" required>
          </input>
    </div>
  )
}

export default Recycling