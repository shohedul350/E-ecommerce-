import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../context/adminContext/adminContext'

export default function Sidebar() {
const {logout} = useContext(Context)

 
    return (
        <div>

<div class="list-group">
  <h2 class="list-group-item list-group-item-action active">
    Your Dashboard
    
  </h2>
  <Link to="/admin/dasgboard" class="list-group-item list-group-item-action"><span className="fas fas-home">Home</span></Link>
  <Link to="/admin/dashboard/create-categories" class="list-group-item list-group-item-action"><span className="fab fa-creative-commons-share">Create Categories</span></Link>
  <Link to="/admin/dashboard/upload" class="list-group-item list-group-item-action"><span className="fas fa-upload">Upload Product</span></Link>
  <Link to="/admin/dashboard/product-store" class="list-group-item list-group-item-action"><span className="fas fa-store">Store</span></Link>
  <Link to="" class="list-group-item list-group-item-action"><span className="fa fa-home mr-3">Change Password</span></Link>
  <p class="list-group-item list-group-item-action"><span className="fa fa-home mr-3" onClick={()=>{logout()}}>Logout</span></p>
</div>
       
        </div>
    )
}
