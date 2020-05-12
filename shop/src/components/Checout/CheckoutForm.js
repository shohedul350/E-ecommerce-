import React,{useState,useContext} from 'react'
import OrderItem from '../cart/orderItem'
import productCotext from '../../context/productContext/productContext'
 import Payment from '../payment/payment'


export default function CheckoutForm() {
    const {cart,cartTotal,cartTax,cartSubTotal,makePayment} = useContext(productCotext)
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        address1:"",
        address2:"",
        country:"",
        zipCode:""
        
    });


const { firstName, lastNeme, email ,address1, address2, country, zipCode }=formData

    const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value})}

    const onSubmit=e=>{
        e.preventDefault();
       console.log(formData)
        alert('Success')
      }
    return (
        <div>
     
        <section id="checkout-container">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 order-md-2 mb-4">
                        <OrderItem/>
                      
                        <form className="card p-2" >
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" disabled/>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-secondary" disabled>Redeem</button>
                                </div>
                            </div>
                        </form>
                        <div className="payment-methods">
                            <p className="pt-4 mb-2">Payment Options</p>
                            <hr></hr>
                            <ul className="list-inline d-flex">
                                <li className="mx-1 text-info">
                                    <i className="fa-2x fa fa-cc-visa"></i>
                                </li>
                                <li className="mx-1 text-info">
                                    <i className="fa-2x fa fa-cc-stripe"></i>
                                </li>
                                <li className="mx-1 text-info">
                                    <i className="fa-2x fa fa-cc-paypal"></i>
                                </li>
                                <li className="mx-1 text-info">
                                    <i className="fa-2x fa fa-cc-jcb"></i>
                                </li>
                                <li className="mx-1 text-info">
                                    <i className="fa-2x fa fa-cc-discover"></i>
                                </li>
                                <li className="mx-1 text-info">
                                    <i className="fa-2x fa fa-cc-amex"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="pl-5">
                        <Payment/>
                        </div>
                        
                    </div>
                    <div className="col-md-8 order-md-1">
                        <strong>cash on delivery system is off</strong>
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" onSubmit={onSubmit} disabled>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="firstName">First name</label>
                                    <input type="text" 
                                    className="form-control" 
                                    name="firstName"
                                    placeholder="Enter Your First Name"
                                     value={firstName}
                                     onChange={e=> onChange(e)}
                                      required
                                      disabled/>
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="lastName">Last name</label>
                                    <input type="text" 
                                    className="form-control"
                                     name="lastName" 
                                     placeholder="Enter Your Last Name"
                                      value={lastNeme} 
                                      onChange={e=> onChange(e)}
                                      required
                                      disabled/>
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>

                

                            <div className="mb-3">
                                <label for="email">Email
                                    <span className="text-muted">(Optional)</span>
                                </label>
                                <input type="email"
                                 className="form-control"
                                  name="email" 
                                  placeholder="you@example.com"
                                  value={email}
                                  onChange={e=> onChange(e)}
                                  disabled/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="address">Address</label>
                                <input type="text" 
                                className="form-control"
                                 name="address1"
                                  placeholder="1234 Main St"
                                  value={address1}
                                  onChange={e=> onChange(e)}
                                   required
                                   disabled/>
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="address2">Address 2
                                    <span className="text-muted">(Optional)</span>
                                </label>
                                <input type="text"
                                 className="form-control"
                                  name="address2"
                                   placeholder="Apartment or suite"
                                   value={address2}
                                   onChange={e=> onChange(e)}
                                   disabled/>
                            </div>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label for="country">Country</label>
                                    <select className="custom-select d-block w-100"
                                     name="country"
                                    onChange={e=> onChange(e)}
                                     required
                                     disabled>
                                        <option value="">Choose...</option>
                                        <option>Bangladeshs</option>
                                        <option>United States</option>
                                      
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                               
                                <div className="col-md-3 mb-3">
                                    <label for="zip">Zip</label>
                                    <input type="text" 
                                    className="form-control"
                                     name="zipCode"
                                     value={zipCode}
                                      placeholder="" 
                                     required
                                     onChange={e=> onChange(e)}
                                     disabled/>
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>
                           
                    
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="save-info" disabled/>
                                <label className="custom-control-label" for="save-info">Save this information for next time</label>
                            </div>
                           

                            <h4 className="mb-3">Payment</h4>

                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
                                    <label className="custom-control-label" for="credit">Credit card</label>
                                    {/* <Payment/> */}
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                                    <label className="custom-control-label" for="debit">Debit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
                                    <label className="custom-control-label" for="paypal">Paypal</label>
                                </div>
                            </div>
                         
                          
                            <hr className="mb-4"/>
                       
                            <button className="btn btn-primary btn-lg btn-block" type="submit" disabled>
                                <i className="fa fa-credit-card"></i> Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  
        </div>
    
    )
}
