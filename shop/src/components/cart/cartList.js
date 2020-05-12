import React from 'react'
import CartItem from './cartItem'

export default function cartList(props) {
    const {items}=props
    return (
        <div className="container-fluid">
            {items.map(item=>{
                return <CartItem key={item._id} item={item} value={items}/>
            })}
            
        </div>
    )
}
