import React,{useState,useContext}from 'react'
import AddcategoriesContext  from '../../context/productContext/productContext'
import CategoriesList from './categoriesList'

export default function Categories() {
 const {Addcategories} = useContext(AddcategoriesContext)

    const [categories,setcategories]=useState('');
  
    const onChange=e=>{setcategories({...categories,[e.target.name]:e.target.value})}

    const onSubmit=e=>{
        e.preventDefault();
        Addcategories(categories)
        alert('success')
      }
    return (
      
        <div className="row " style={{background:""}}>
                <div className="col-md-6 offset-md-3">
                <h3 className="text-center display-6">Create categories</h3>
               
                  <form  onSubmit={onSubmit} >
                  <div className="form-group">

                  </div>
                    <div className="form-group">
                      <label htmlFor="title"> Categories: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Categories"
                        name="categories"
                         onChange={e=> onChange(e)}
                         required
                      />
                     
                    </div>
                    <button onSubmit={onSubmit} className="btn btn-primary my-3 d-block">Create</button>
                  </form>
               </div>
           <div className="col-md-6 m-auto">
           <CategoriesList/>
           </div>
              
               </div>
             
    )
}
