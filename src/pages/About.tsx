// import Background from '../assets/videos/1038909_Proctect_earth_background_HD_BG.mp4';
import Background2 from '../assets/images/CO2/carbon_cycle.jpg';
// import Background3 from '../assets/videos/OceanFacts-CarbonCycle.mp4';


function About() {
  return (
    <>
    <div 
      // style={{ backgroundImage: `url(${Background})`}}
      className="flex flex-row justify-center align-middle mx-auto bg-contain bg-fixed"
      >
        
        <div className="flex place-items-center w-1/1 h-screen ">
          <h3 className="p-5 bg-opacity-30  text-black rounded bg-slate-300 ">
            Based on analysis from NOAA's Global Monitoring Lab, global average atmospheric carbon dioxide was 414.72 parts per million (“ppm” for short) in 2021, setting a new record high despite the continued economic drag from the COVID-19 pandemic. In fact, the jump of 2.58 ppm over 2021 amounts tied for 5th-highest annual increase in NOAA's 63-year record. 
          </h3>
        </div>
      </div>
      <div 
        className="flex justify-center items-center bg-opacity-0 h-screen p-3"
      >
        <div className="flex p-3 bg-opacity-0 rounded-lg shadow-xl max-w-3x1 sm:p-8 ">
          <div className="aspect-w-16 aspect-h-9 bg-opacity-0 ">
            <h3 className="flex p-3 bg-gray-300 bg-opacity-0 place-items-center text-black rounded">
              <iframe  
              className ="video" 
              src="https://oceanservice.noaa.gov/facts/OceanFacts-CarbonCycle.mp4"
              allow="accelerometer; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
              allowFullScreen
              >
              </iframe>
            </h3>
          </div>
        </div>
      </div>
      <div 
        // style={{ backgroundImage: `url(${Background})`}}
        className="flex flex-row justify-center h-screenr align-middle mx-auto bg-contain bg-fixed"
      >
        <div className="flex place-items-center bg-opacity-30 bg-slate-300 justify-items-center  p-3">
          <p className="p-5  text-black rounded"> VIDEO: The carbon cycle describes the process in which carbon atoms continually travel from the atmosphere to the Earth and then back into the atmosphere. Human activities have a tremendous impact on this cycle. Burning fossil fuels, changing land use, and using limestone to make concrete all transfer massive quantities of carbon into the atmosphere. As a result, the amount of carbon dioxide in the atmosphere is rapidly rising — it is now greater than at any time in the last 3.6 million years. <a href="https://oceanservice.noaa.gov/facts/carbon-cycle.html#transcript">Transcript</a></p>
        </div>
      </div>
      <div
      // style={{ backgroundImage: `url(${Background})`}}
      className="flex flex-row justify-center align-middle mx-auto bg-contain bg-fixed"
      >
        <div className="flex place-items-center w-1/2 h-screen">
          <h3 className='p-5 bg-white bg-opacity-25  text-black rounded'>
              This site measures you carbon output. As you start entering your personal data, you will receive a chart with comparision to the average and target ratios to help identify your Carbon Output. This should also help you to decice how to decrease your carbon output. 
            </h3>
        </div>
        <div className="flex place-items-center w-1/2 h-screen">
          <h3 className="p-5 bg-white bg-opacity-25  text-black rounded">
              This site measures you carbon output. As you start entering your personal data, you will receive a chart with comparision to the average and target ratios to help identify your Carbon Output. This should also help you to decice how to decrease your carbon output. 
            </h3>
        </div>
      </div>
      
          
       

      </>
  )
}

export default About
