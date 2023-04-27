import React from 'react'
// import "../assets/static/style.css"
import SideMenu from "../components/SideMenu";
import PageContent from '../components/PageContent';

function Main() {
  return (
     
      <div className="flex main SideMenuandContentPage p-1 ">
              <SideMenu></SideMenu>
              <PageContent></PageContent>
              
        
      </div>
   
  )
}

export default Main
