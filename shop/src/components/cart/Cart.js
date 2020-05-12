import React,{useContext,useEffect} from 'react'
import Tittle from '../Title/Title'
import CartColum from './CartColum'
import EmptyCart from './EmptyCart'
import CartList from './cartList'
import CartTotal from './CartTotal'
import ProductContext from '../../context/productContext/productContext'
 const Cart = () => {
    const {cart}=useContext(ProductContext)
    
     if(cart.length>0){
        return (
   <div className="container">
      <Tittle  name="your" tittle="cart"/>
      <CartColum/>
      <CartList items={cart}/>
      <CartTotal />
    </div>
        )
    }
     return <EmptyCart/>
  
}

export default Cart


   