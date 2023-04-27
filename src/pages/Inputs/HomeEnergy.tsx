import React from 'react'
import '../../assets/static/styles.css';

function HomeEnergy() {
  return (
    <div className="flex flex-col bg-slate-400 p-3 justify-items-center w-auto text-lg items-center h-auto">
      <h1 className="title">Home Energy</h1>
       
      <label htmlFor="homeEnergy_questions" className="block m-2 text-md justify-items-center font-medium text-gray-700 dark:text-white">Select Your Home Energy Options</label>
        <select multiple id="homeEnergy_dishwasher" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Did you use your dishwasher today?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="dishwasher_loads" className="block m-2 text-sm font-medium text-gray-900 dark:text-white">How Many Loads</label>
            <input type="text" id="transportation_distance" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-3 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Loads" required>
            </input>
        
       
        <select multiple id="homeEnergy_washingMachine" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Did you use your washing machine today?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="washer_loads" className="block m-2 text-sm font-medium text-gray-900 dark:text-white">How Many Loads</label>
            <input type="text" id="washer_loads" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-3 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Loads" required>
            </input>
        
        
        <select multiple id="homeEnergy_dryer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Did you use your dryer today?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        
        <label htmlFor="dryer_loads" className="block m-2 text-sm font-medium text-gray-900 dark:text-white">How Many Loads</label>
            <input type="text" id="dryer_loads" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-3 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Loads" required>
            </input>
        
            <select multiple id="homeEnergy_thermostat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Did you run the HVAC today?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label htmlFor="thermostat_temp" className="block m-2 text-sm font-medium text-gray-900 dark:text-white">What temperature?</label>
                <input type="text" id="thermostat_temp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  mb-2 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Temp" required>
            </input>
        
      
    </div>
  )
}

export default HomeEnergy
