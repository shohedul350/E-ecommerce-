import React,{useContext} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import productCotext from '../../context/productContext/productContext';





export default function Payment() {
    const {cart,cartTotal,cartTax,cartSubTotal,makePayment} = useContext(productCotext)
    return (
        <div>

<StripeCheckout
                    stripeKey="pk_test_aSyhbswoE0OnDJiZYXNeN3GU00ZIUzC8ZG"
                    name="Buy Product"
                    email
                    currency="USD"
                    token={makePayment(cart)}
                    amount={cartTotal*100}
                    shippingAddress
                    billingAddress
                    >
                        <button className="btn btn-primary"> 
                               Pay now
                        </button>
                     </StripeCheckout>
   
        </div>
    )
}
