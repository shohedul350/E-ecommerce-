import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../../pages/Dashboard/style.css'
import ProductContext from '../../context/productContext/productContext'

export default function SideMenu() {
    const {showproduct,getCategories,categories} =useContext(ProductContext)
  
    useEffect(()=>{
        getCategories()
      },[])

    return (

            
 <div id="list-example" className="list-group">
    
  <p className="list-group-item list-group-item-action p-3 text-center navbar-light bg-drak" >CATEGORIES</p>
   {
   !categories.length ? (<div className="container d-flex justify-content-center p-4">
   <div className="spinner-border" role="status">
     <span className="sr-only">Loading...</span>
   </div>
 
   <p className="pl-1">Loading...</p> 
 
 </div>
 ) :(
   categories.map(categorie=>{
      return <Link to="/shop" className="list-group-item list-group-item-action text-uppercase" 
   onClick={()=>showproduct(`${categorie.categories}`)}>{categorie.categories} COLLECTION</Link>
    })
   )
    } 
 
</div>

    )
}
