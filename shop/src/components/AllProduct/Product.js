import React,{useContext} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

import ProductContext from '../../context/productContext/productContext'
 const Product = (props) => {

     const {_id,title,image,price,inCart} = props.product
     const {addCart,singleProduct}=useContext(ProductContext);
  
    return (
        <ProductWrapper  className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
            <div className="card">
                <div className="img-container p-5">
                     <button  onClick={()=>singleProduct(_id)} >
                    <Link   to ={`/details/${_id}`} >
                    <img src={image}  alt="product" className="card-img-top" style={{height:"150px"}}/>
                      </Link> 
                        
                 </button> 
                    <button className="cart-btn"
                   onClick={()=>addCart(_id)}
                    disabled={inCart ? true :false}>
                     { inCart ? (
                   <p className="text-capitalize mb-0"
                    disabled>
                         {""}
                        in cart
                      </p>
      ):(
          <i className="fas fa-cart-plus"/>
      )}

                    </button>
                </div>

                <div className="card-footer d-flex justify-content-between">
      <p className="align-self-center mb-0">{title}</p>
      <h5 className="text-blue font-italic mb-0">
          <span className="mr-1">$</span>
          {price}
      </h5>
                </div>
            </div>

        </ProductWrapper>
    )
}


Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool

    }).isRequired
}
const ProductWrapper = styled.div`
.card{
  
    transition: all ls linear;
}
.card-footer{
   
    transition: all ls linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    overflow: hidden
}
.card-img-top{
    transition: all ls linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2)
}
.cart-btn{
    position: absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background:blue;
    border:none;
    color:white;
    font-size:1.rem;
    border-radius:0.5rem 0 0 0;
    transform: translate(100, 100);
    transition: all ls linear;
}
.img-container:hover .cart-btn{
    transform(0,0);

}
.cart-btn:hover{
    // color: blue;
    cursor:pointer
}
`;

export default Product