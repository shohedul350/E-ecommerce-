import React,{useContext} from 'react'
import ProductContext from '../../context/productContext/productContext'

export default function Message() {
    const {message,clearMessage}= useContext(ProductContext)
  
    return (
        <div>
             {message !== null && <button className="alert alert-info text-center">
              {message.msg ? message.msg : message.message[0].msg}
                 <span onClick={()=>clearMessage()}>X</span>
              </button>
                }
    
        </div>
    )
}
