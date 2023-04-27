import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import routes from './config/routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';


type RadarChart = {
  children: React.ReactNode;
  
}

function App() {

  return (
    <HashRouter>
      <Header />
      <Navbar />
      
      <Routes>
        { routes.map((route, index) => (
          <Route
          key ={index}
          path ={route.path}
          element={
            <route.component />
          }
          />
        )
          
        )
        }
      </Routes>
      <Footer />
    </HashRouter>
    
  )
}

export default App
