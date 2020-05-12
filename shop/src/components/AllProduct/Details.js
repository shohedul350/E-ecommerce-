import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../../context/productContext/productContext'
 const Details = () => {

     const {addCart,product}=useContext(ProductContext)
    
     const {_id,title,image,price,company,info,inCart } = product

    return (
        <React.Fragment>
        <div className="container" style={{height:"400px"}}>
           <div className="row">
           <div className="col-md-4 my-3">
              <div className="thumbnail">
              <img src={`/${image}`} alt="product" className="img-responsive" style={{width:"200px",height:"200px"}}/>
            
                </div>
                </div>
                <div className=" col-md-6 my-3">
                <div className="caption">
                <h2>model: {title}</h2>
                <h4 classNameName="text-title text-uppercase">
                    made by: <span>{company}</span>
                </h4>
                  <h4 className="texr-blue"><strong>price: <span>${price}</span></strong></h4>
                 
                  <p classNameName="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product 
                      </p>
                      <p classNameName="text-justify">
                          {info}
                     </p>
                </div>
            
                <div className="space-ten"></div>
                <div className="btn-ground text-center">
                    <Link to="/shop">
                    <button type="button" className="btn btn-primary mr-2"><i className="fas fa-backward mr-2"></i> Back to product</button>
                    </Link>

                    <button className="btn btn-info"
                   onClick={()=>addCart(_id)}
                    disabled={inCart ? true : false}>
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
                <div className="space-ten"></div>
              </div>
            </div>
            </div>
           
          


</React.Fragment>



    )
}

export default Details