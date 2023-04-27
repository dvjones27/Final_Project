import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'
// import Background from '../assets/videos/coverr-timelapse-of-a-sunset-6588-original.mp4';

function Navbar() {
  const [isVisible, setIsVisible] =useState(false);
  
const dropDown = () => {
  setIsVisible(!isVisible)
}

const clicked = () => {
  setIsVisible(false)
}
  
  return (
    <nav 
    // style={{ backgroundImage: `url(${Background})`}} 
    className ="flex items-center justify-between flex-wrap bg-green-900 bg-center bg-cover p-1 border-2 border-gray-700">
      <div className="flex items-center flex-shrink-0 text-gray-200 m-4">
        <Link to='/' className="font-semibold text-l tracking-tight">Home</Link>
      </div>
      <div className="block">
        
        <Button 
          onClick={dropDown}
          className="flex items-center px-3 py-2 text-gray-300 border rounded border-gray-300 hover:text-black hover:border-black ">
            <i className="fa-light fa-bars spinPulse text-gray-300 hover:text-black" ></i>
        </Button>
        
        
      </div>
      { isVisible ? ( 
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <Button className="p-3 m-5 bg-gray-300  hover:text-gray-300 hover:bg-black rounded justify-center">
                        <div>
                            <Link to='/' onClick={ clicked } className='flex place-items-center m-4 lg:inline-block md:m-0 
                            text-green-700 font-bold opacity-15 hover:text-gray-300 '>
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-gray-300   hover:text-gray-300 hover:bg-black rounded justify-center">
                        <div>
                            <Link to='/about' onClick={ clicked } className='flex place-items-center m-4 lg:inline-block md:m-0 
                            text-green-700 font-bold opacity-15  hover:text-gray-300'>
                                About
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-gray-300 hover:text-gray-300 hover:bg-black rounded justify-center">
                        <div>
                            <Link to='/main' onClick={ clicked } className='flex place-items-center m-4 lg:inline-block md:m-0 
                            text-green-700 font-bold opacity-15 hover:text-gray-300 '>
                                Overview
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-gray-300  hover:text-gray-300 hover:bg-black rounded justify-center">
                        <div>
                            <Link to='/contact' onClick={ clicked } className='flex place-items-center m-4 lg:inline-block md:m-0 
                            text-green-700 font-bold opacity-15 hover:text-gray-300 '>
                                Profile
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-gray-300  hover:text-gray-300 hover:bg-black rounded opacity-15 justify-center">
                        <div>
                            <Link to='/input' onClick={ clicked } className='flex place-items-center m-4 lg:inline-block md:m-0 
                            text-green-700 font-bold opacity-15 hover:text-gray-300 '>
                                Input
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-gray-300  hover:text-gray-300 hover:bg-black rounded opacity-15 justify-center">
                        <div>
                            <Link to='/dashboard' onClick={ clicked } className='flex place-items-center m-4 lg:inline-block md:m-0 
                            text-green-700 font-bold opacity-15 hover:text-gray-300 '>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-gray-300  hover:text-gray-300 hover:bg-black rounded opacity-15 justify-center">
                        <div>
                            <Link to='/radarchart' onClick={ clicked } className='flex place-items-center m-4 lg:inline-block md:m-0 
                            text-green-700 font-bold opacity-15 hover:text-gray-300 '>
                                Radar Chart
                            </Link>
                        </div>
                    </Button>
      
                  </div>
                </div>
                ) : ( 
            <></>
        )}
      
    </nav>
  )
}

export default Navbar