// import Background from '../assets/videos/Earth_Spin_In_Hands.mp4';
import '../assets/static/styles.css';

function Home() {
  return (
    <div 
      // style={{ backgroundImage: `url(${Background})`}}
      className="flex flex-row justify-center mx-auto bg-cover bg-fixed "
      >
        <div className="animate-words flex place-items-center h-screen p-0 justify-start">
          <h3 className="animate-words p-1 place-items-center bg-opacity-50 text-black rounded  justify-start border-2 border-gray-700">
              Protect Our Earth
            </h3>
            <h3 className="animate-words p-1 place-items-center bg-opacity-50 text-black rounded  justify-start border-2 border-gray-700">Protect Our Earth</h3>
        </div>
      </div>
      
  )
}

export default Home