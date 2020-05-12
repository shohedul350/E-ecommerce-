import React,{useContext} from 'react'
import Top from './Top'
import SearchBar from './SearchBar'
import './btn.css'
import {Link} from 'react-router-dom'
import Context from '../../context/productContext/productContext'

export default function Header() {
    const {cart } = useContext(Context)
 
    
    return (
   <div className="">
       <Top/>
        <div class="row">
                <div class="col-md-2 pl-5 pb-3">
                      <Link to="/">
                      <img
                              src={'onlineshop.jpg'}
                              style={{width:"5rem",height:"5rem"}}
                              className="img-fluid p-2"
                              alt="product"
                        />     
                    </Link>
                </div>
                <SearchBar/>
               

                <div className="col-md-2">
                  <Link to='/cart' className="">
                    <button 
                          type="button" 
                          className="custombtn">
                          <span className="mr-2"> <i class="fas fa-shopping-cart"></i></span>
                          My Cart {!cart.length ? null : (<span class="badge badge-success badge-pill">{cart.length}</span>)}
                      </button>
                    </Link>
              </div>
        </div>
  
</div>

    )
}
