import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/menubar/Navbar'
import SideMenu from '../../components/menubar/SideMenu'
import Cart from '../../components/cart/Cart'
import Footer from '../../components/Footer'

export default function HomePage() {
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
                    <Cart/>
                    
                    </div>
                </div>
        </div> 
       <Footer/>
            
    </div>
    )
}
