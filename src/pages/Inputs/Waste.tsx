import React from 'react'

function Waste() {
  return (
    <div className="flex flex-col bg-slate-400 p-3 justify-items-center w-auto text-lg items-center h-auto">
      <h1 className="title">Waste</h1>
      
      <label htmlFor="trash_questions" className="block m-2 text-md justify-items-center font-medium text-gray-900 dark:text-white">Select Your Daily Waste Options</label>
        <select multiple id="trash_toss" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Did you throw out trash today?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          
        </select>
        <label htmlFor="trash_amount" className="block m-2 text-sm font-medium text-gray-900 dark:text-white justify-center">How much trash did you toss today?</label>
          <input type="text" id="trash_amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 mb-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="# of lbs" required>
          </input>
        
    </div>
  )
}

export default Waste
