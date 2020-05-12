
import React,{useContext}from 'react'
 import productContext from '../../context/productContext/productContext'

export default function OrderItem() {
    const {cart,cartTotal,cartTax,cartSubTotal} = useContext(productContext)
   
    return (
        <div>
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Your cart</span>
                            <span class="badge badge-secondary badge-pill">{cart.length}</span>
            </h4>

              <ul class="list-group mb-3">

            {
                 !cart.length ? (
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                       <h6 class="my-0">Empty</h6>
                                            
                                        </div>
                                    <span class="text-muted">0</span>
                    </li>
                 ): (
                    cart.map(item=>{
                        return(
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                          <h6 class="my-0">{item.title} * {item.count}</h6>
                                            
                                        </div>
                                       <span class="text-muted">{item.total}</span>
                        </li>
                        )
                    })
                 )


            }
                           
                           
                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="text-success">
                                    <h6 class="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span class="text-success">-$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Subtotal (USD)</span>
                                <strong>${cartSubTotal}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Shiping (USD)</span>
                                <strong>${cartTax}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${cartTotal}</strong>
                            </li>
                        </ul>
        </div>
    )
}
