import React from 'react'

export default function CartColum() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-md-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Product</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Name of Product</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Price</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Quantitiy</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Remove</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Total</p>
                </div>

            </div>
            
        </div>
    )
}
