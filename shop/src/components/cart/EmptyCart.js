import React from 'react'

 const EmptyCart = () => {
    return (
        <div className="continer mt-5" style={{height:"350px"}}>
           <div className="row">
               <div className="col-10 mx-auto text-center text-title">
                   <h1>Your cart is currently empty</h1>
               </div>
           </div>
        </div>
    )
}

export default EmptyCart