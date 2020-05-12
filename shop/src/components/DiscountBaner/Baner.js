import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import ProductContext from '../../context/productContext/productContext'
export default function Baner() {

    const {showproduct} =useContext(ProductContext)
    return (
        <div className="container pt-5">
           <div className="row">
            <div className="col-md-6 baner-background-1">
                <div className="text-center pt-5">
                <Link to="/shop">
                <button type="button"  onClick={()=>showproduct('men')} className="btn btn-outline-primary btn-lg ">Shop Now</button>
                </Link> 
                </div>
            </div>

            <div className="col-md-6 baner-background-2">
                <div className="text-center pt-5">
                <Link to="/shop">
                <button type="button" onClick={()=>showproduct('women')} className="btn btn-outline-primary btn-lg ">Shop Now</button>
                </Link>
                </div>
            </div>
        </div>
        </div>
    )
}
