import React from 'react' 
import './App.css';
import Header from './components/header/Header'
import Navbar from './components/menubar/Navbar'
import SideMenu from './components/menubar/SideMenu'
import Slider from './components/slider/slider'
import Banner from './components/DiscountBaner/Baner'
import ProductList from './pages/ProductList'
import RecentProduct from './components/RecentProduct/RecentProduct'
import Associates from './components/Associates/Associates'
import Footer from './components/Footer'
import ProductState from './context/productContext/productState'
import Details from './pages/Details';
import Cart from './pages/cart/Cart';
import Error from './pages/Error';
import {Route,Switch,Link} from 'react-router-dom'

export default function App() {
    return (
        <div>
        <ProductState>
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
       <Switch>
      <Route exact path="/" component={Slider}/>
      <Route exact path="/shop" component={ProductList}/>
      <Route exact path="/details/:id" component={Details}/>
      <Route exact path="/cart" component={Cart}/>
      
      <Route  component={Error}/>
      
    </Switch>
          </div>
          </div>
        </div> 
        <Banner/>
<RecentProduct/>
   <Associates/>
    <Footer/>
    </ProductState>
            
        </div>
    )
}
