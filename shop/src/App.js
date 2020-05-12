import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/Client/HomePage';
import CardPage from './pages/Client/CardPage';
import CheckoutPage from './pages/Client/CheckoutPage'
import ShopPage from './pages/Client/ShopPage';
import SingleProductPage from './pages/Client/SingleProductPage';
import ContactPage from './pages/Client/ContactPage';
import AboutPage from './pages/Client/AboutPage';
import AboutApplicationPage from './pages/Client/About-ApplicationPage';
import UserAccountPage from './pages/Client/UserAcountPage/userLoginPage';
import SharchPage from './pages/Client/SearchPage';
import Error from './pages/ErrorPage/Error';
import Dashboard from './pages/Dashboard/Dashboard';
import UploadProduct from './pages/Dashboard/UploadPage';
import AddCategories from './pages/Dashboard/Add-categories';
import StorePage from './pages/Dashboard/storePage'
import LoginPage from './pages/Dashboard/LoginPage'
import ProductState from './context/productContext/productState';
import AdminState from './context/adminContext/adminState'
import ContactState from './context/contactContext/ContactState'
import AdminPrivetRoute from './privetRoute/adminPrivetRoute'





function App() {
  return (
    <div>
     
  <ProductState>
    <AdminState>
    <ContactState>


       <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/cart" component={CardPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/my-account" component={UserAccountPage}/>
          <Route exact path="/details/:id" component={SingleProductPage}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/about-application" component={AboutApplicationPage}/>
          <Route exact path="/search" component={SharchPage}/>
          <Route exact path="/admin/login" component={LoginPage}/>
          <AdminPrivetRoute exact path="/admin/dashboard" component={Dashboard}/>
          <AdminPrivetRoute exact path="/admin/dashboard/upload" component={UploadProduct}/>
          <AdminPrivetRoute exact path="/admin/dashboard/create-categories" component={AddCategories}/>
          <AdminPrivetRoute exact path="/admin/dashboard/product-store" component={StorePage}/>
          <Route  component={Error}/>
      </Switch>
      </ContactState>
    </AdminState>
  </ProductState>

  </div>
    
  );
}

export default App;
