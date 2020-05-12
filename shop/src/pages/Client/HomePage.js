import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/menubar/Navbar'
import SideMenu from '../../components/menubar/SideMenu'
import Slider from '../../components/slider/slider'
import Banner from '../../components/DiscountBaner/Baner'
import RecentProduct from '../../components/RecentProduct/RecentProduct'
import Associates from '../../components/Associates/Associates'
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
                        <Slider/>
                    </div>
                </div>
        </div> 
       <Banner/>
       <RecentProduct/>
       <Associates/>
       <Footer/>
            
    </div>
    )
}
