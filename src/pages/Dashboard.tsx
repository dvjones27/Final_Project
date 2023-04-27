import React, { useState, useEffect } from 'react';
// import RadarChart from '../components/pages/RadarChart';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';
import RadarC from './Charts/RadarC';
import Transportation from '../pages/Inputs/Transportation';
import Water from '../pages/Inputs/Water';
import Waste from '../pages/Inputs/Waste';
import HomeEnergy from '../pages/Inputs/HomeEnergy';
import Recycling from '../pages/Inputs/Recycling';
// /Charts/RadarChart';
import { render } from 'react-dom';
// import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import Background from '../assets/images/GeneralBackgrounds/leaf.jpg'
import { Typography } from '@mui/material';

function Dashboard() {
  const [dataSource, setDataSource ]= useState([])
  const [loading, setLoading ] = useState(false)
  
  // useEffect(() => {
  //   setLoading(false)
  //   getInput().then(res=>{}
  //     )
    
  // }, [])
  return (
    <>
    <div 
        style={{ backgroundImage: `url(${Background})`}}
        className="flex flex-row justify-center mx-auto bg-fixed bg-cover"
        >
        <div className="flex" >
          <h3 className="p-5">
             <HomeEnergy/>
          </h3 >
        </div>
        <div className="flex " >
          <h3 className="p-5">
            <Transportation/>
          </h3>
        </div>
        <div className="flex " >
          <h3 className='p-5 '>
             <Water/>
          </h3>
        </div>
        <div className="flex " >
            <h3 className="p-5 ">
              <Waste/>
            </h3>
          </div>
        <div className="flex " >
          <h3 className='p-5 '>
             <Recycling/>
          </h3>
        </div>
      </div>
    </>
    
  )
}

export default Dashboard
