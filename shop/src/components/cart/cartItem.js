import React,{useContext}from 'react'
 import productContext from '../../context/productContext/productContext'



export default function CartItem({item,value}) {
    const {_id,title,image,price,total,count}=item
    const {increment,decrement,removeItem}=useContext(productContext);
    return (
        <div className="row my-1 text-capitalize text-center">
          <div className="col-10 mx-auto col-lg-2">
              <img
              src={`/${image}`}
              style={{width:"5rem",height:"5rem"}}
              className="img-fluid"
              alt="product"
              />
          </div>

          <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
          </div>

          <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {price}
          </div>


          <div className="col-10 mx-auto col-lg-2 my-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
            <div>
            <button className="btn btn-light mx-1"
            onClick={()=>decrement(_id)}>-</button>
                <span className="btn btn-light mx-1">{count}</span>
                <button className="btn btn-light mx-1"
                 onClick={()=>increment(_id)}>+</button>
            </div>
        </div>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon">
               <spna  onClick={()=>removeItem(_id)}><i className="fas fa-trash"></i></spna> 
               
            </div>
             
          </div>
          <div className="col-10 mx-auto col-lg-2">
              <strong>item total : $  {total}</strong>
             
          </div>


        </div>
    )
}
