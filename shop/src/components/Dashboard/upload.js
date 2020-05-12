import React, { useState, useContext, useEffect} from "react";
import UploadContext from '../../context/productContext/productContext'

const Upload=()=> {

const {uploadData,categories,getCategories} = useContext(UploadContext);
useEffect(()=>{
  getCategories()
},[])
    const [formData,setFormData]=useState({
      title:"",
      price:"",
      company:"",
      info:"",
      image:"",
      categories:""
  });


  const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value})}
  const upHandler=e=>{setFormData({...formData,[e.target.name]:e.target.files[0]})}

const {title,price,company,info,}=formData


const onSubmit=e=>{
  e.preventDefault();
  if(!formData.categories){
    alert('please select categories')
  }
  uploadData(formData)
  alert('Success')
}

    return (


        <div className="row " style={{background:""}}>
                <div className="col-md-6 offset-md-3">
                <h3 className="text-center display-6">Upload product</h3>
               
                  <form  onSubmit={onSubmit} enctype="multipart/form-data" >
                  <div className="form-group">

                  </div>
                    <div className="form-group">
                      <label htmlFor="title"> Name: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your title"
                        name="title"
                         value={title}
                         onChange={e=> onChange(e)}
                         required
                      />
                    </div>


                    <div className="form-group">
                      <label htmlFor="title"> Price: </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Your Price"
                        name="price"
                        value={price}
                         onChange={e=> onChange(e)}
                         required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="title"> Brand Name: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Brand"
                        name="company"
                        value={company}
                         onChange={e=> onChange(e)}
                         required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="descriptin">Product Descriptin: </label>
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Enter Your descriptin"
                        name="info"
                        value={info}
                        onChange={e=> onChange(e)}>
                       required
                        </textarea>
                    </div>

                    <div className="form-group">
                    <label>
                      Select categories:
                      <select name="categories"
                        onChange={e=> onChange(e)}
                        className="form-control"
                        required>
                        <option>Select categories</option>
                        {categories.map((categorie)=>(
                        <option>{categorie.categories}</option>
                        ))
                        }
                        </select>
                    </label>
                    </div>
                    <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                 className="form-control" 
                 name="image"
                 onChange={e=> upHandler(e)}
                 required/>                    
                </div> 
                <button onSubmit={onSubmit} className="btn btn-primary my-3 d-block">Upload</button>
                  </form>
               </div>
               </div>
             
        
    
    )
}

export default Upload
