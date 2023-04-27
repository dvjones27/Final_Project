import React from 'react'

function Transportation() {
  return (
    <div className="flex flex-col bg-slate-400 p-3 justify-items-center w-auto text-lg items-center h-auto">
      <h1 className="title">Daily Transportation</h1>
      
      <label htmlFor="transportation_questions" className="block m-2 text-md justify-items-center font-medium text-gray-900 dark:text-white">Select Your Daily Transportation Options</label>
      <select multiple id="transportation_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>How did you travel today?</option>
          <option value="Drive">Drive</option>
          <option value="Public Transportation">Public Transportation</option>
          <option value="Non-Motorized Vehicle">Non-Motorized Vehicle"</option>
          <option value="Did Not Travel">Did Not Travel Today</option>
        </select>
        <label htmlFor="transportation_vehicle" className="block m-2 text-sm font-medium text-gray-900 dark:text-white"></label>
        <select multiple id="transportation_vehicle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>What Type of Vehicle Do you Have?</option>
          <option value="Gas">Gas</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
          <option value="PHEV">Plug-In Hybrid Electric Vehicle</option>
          <option value="EV">Electric Vehicle</option>
        </select>
        <label htmlFor="transportation_carpool" className="block m-2 text-sm font-medium text-gray-900 dark:text-white justify-center">Select Your Travel Options</label>
        <select multiple id="transportation_carpool" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> 
          <option selected>Did you carpool today?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="transportation_distance" className="block m-2 text-sm font-medium text-gray-900 dark:text-white">Distance Miles</label>
            <input type="text" id="transportation_distance" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-2 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Miles" required>
            </input>

    </div>
  )
}

export default Transportation