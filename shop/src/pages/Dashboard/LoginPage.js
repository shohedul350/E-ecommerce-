import React, { useState, useContext, useEffect,Fragment } from "react";
import {Link} from 'react-router-dom'
import AdminContext from "../../context/adminContext/adminContext";

const LoginPage = (props) => {
const {loginAdmin,adminAuth,message,clearMessage} = useContext(AdminContext);
  useEffect(()=>{
    if(adminAuth){
props.history.push('/admin/dashboard')
    }
  },[adminAuth,props.history])
  const [formData,setFormData]=useState({
          email:"",
          password:"",
       
      });
 const {email,password}=formData

const onSubmit=e=>{
    e.preventDefault();
    loginAdmin({email, password});
    clearMessage()
    }

    // clearError()
const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value}); }
    return <Fragment>

<div className="row" style={{background:"#D0D4DE ",height:"650px",width:"100%"}}>
        <div className="m-auto pt-3">
            <h1 className="text-center display-6"><i class="fas fa-users-cog"></i></h1>
          <div className="pr-5 pl-5 pt-4 pb-4 m-auto" style={{background:"#fafaf1"}}>
          <form onSubmit={e=>onSubmit(e)}>
           
            <div className="form-group" >
              <label htmlFor="email">Username or Email: </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={e=> onChange(e)}
              />
             
            </div>
            <div className="form-group">
              <label htmlFor="password"> Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={e=> onChange(e)}
              />
            </div>

            <div className="question">
              {message !== null && <button className="alert alert-danger">
              {message.msg ? message.msg : message.message[0].msg}
                 <span onClick={()=>clearMessage()}>X</span>
              </button>
                }
            </div>
    
            <button type="submit" className="btn btn-primary mr-0">login</button>
          </form>
          </div>
          <Link to="/" className="text-center p-3"><p><i class="fas fa-backward"></i> Back To BestChoice</p></Link>
        </div>
      </div>
    

    </Fragment>
  
}

export default LoginPage