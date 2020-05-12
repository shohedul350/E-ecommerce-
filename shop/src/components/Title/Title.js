import React from 'react'

 const Product = ({name,tittle}) => {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-tittle">
              <h1 className="text-capitalize font-weight-bold">
                  {name}<strong className="text-blue">{tittle}</strong>
              </h1>
            </div>
        
        </div>
    )
}

export default Product