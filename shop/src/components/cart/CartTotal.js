import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import productContext from '../../context/productContext/productContext'
import Payment from '../payment/payment'


export default function CartTotal() {
    const {addTotal,clearCart,cartSubTotal,cartTax,cartTotal}=useContext(productContext);
    useEffect(()=>{
        addTotal()
       // eslint-disable-next-line
      },[])
    return (
        <React.Fragment>
            <div className=" p-5">
            <div className="row">
            <div className="mt-2 ml-auto  text-capitalize text-right">
                <Link to="/">
                    <button className="btn btn-outline-danger text-uppercase bm-3 px-5"
                    type="button"
                    onClick={()=>clearCart()}>
                        Clear Cart
                    </button>
                </Link>
                <h5>
                    <span className="text-title">Sub Total:</span>
                    <strong>${cartSubTotal}</strong>
                </h5>
                <h5>
                    <span className="text-title">Tax:</span>
                    <strong>${cartTax}</strong>
                </h5>
                <h5>
                    <span className="text-title">Total:</span>
                    <strong>${cartTotal}</strong>
                </h5>
                <Link to='/checkout'>
                <button className="btn btn-lg btn-success">Proceed to checkout</button>
                </Link>
                {/* <Payment/>  */}
            </div>
            </div> 
            
            </div>
        </React.Fragment>
    )
}
