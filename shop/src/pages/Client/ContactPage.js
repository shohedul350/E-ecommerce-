import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/menubar/Navbar'
import SideMenu from '../../components/menubar/SideMenu'
import Contact from '../../components/contact/Contact'

import Footer from '../../components/Footer'

export default function ContactPage() {
    return (
    <div>
      <div className="border">
       <Header/>
      </div>
         
      <div class="row ml-3 mr-3">
    
            <div class="col-md-2 p-0"> 
            <SideMenu/>
            </div>
                <div class="col-md-10 p-0 ">
                    <div>
                       <Navbar/> 
                    </div>
                    <div className="p-0">
                   <Contact/>
                    </div>
                </div>
        </div> 
       <Footer/>
            
    </div>
    )
}