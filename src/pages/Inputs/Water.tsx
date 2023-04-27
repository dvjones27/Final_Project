import React from 'react'

function Water() {
  return (
    <div className="flex flex-col bg-slate-400 p-3 justify-items-center w-auto text-lg items-center h-auto">
      <h1 className="title">Water</h1>
      <label htmlFor="water_questions" className="block m-2 text-md justify-items-center font-medium text-gray-900 dark:text-white">Select Your Daily Water Options</label>
        <select multiple id="water_shower" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 m-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>How long did you shower today?</option>
          <option value="5"> {"≤"}5 mins</option>
          <option value="510">5 to 10 minutes</option>
          <option value="1015">10 to 15 minutes"</option>
          <option value="1520"> 15 to 20 minutes</option>
          <option value="20"> {"≥"}20 minutes</option>
        </select>
        <select multiple id="water_bath" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 m-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Did you bathe today?</option>
          <option value="Yes"> Yes</option>
          <option value="No">No</option>
        </select>
        <select multiple id="water_brushing" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 m-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Did you turn off the water while brushing today?</option>
          <option value="Yes"> Yes</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="trash_amount" className="block m-2 text-sm font-medium text-gray-900 dark:text-white justify-center">How many times did you wash your hands today?</label>
          <input type="text" id="trash_amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 m-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="# of times hands washed" required>
          </input>
        <select multiple id="water_washing+hands" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 m-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Did you turn off the water washing your hands today?</option>
          <option value="Yes"> Yes</option>
          <option value="No">No</option>
        </select>
        
    </div>
  )
}

export default Water
