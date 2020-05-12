import React,{useEffect,useContext} from 'react'
import Context from '../../context/productContext/productContext'
export default function CategoriesList() {
    const {categories,getCategories,deleteCategories} = useContext(Context);
useEffect(()=>{
  getCategories()
  // eslint disable nextline
},[])
    return (
  
    <table className="table table-sm ">
    <thead>
      <tr>
      
        <th scope="col">categories Name</th>
        <th scope="col">Delete</th>
    
      </tr>
    </thead>
    <tbody>
    


    {categories.map(categorie=>(
            <tr>
            <td className="text-uppercase">{categorie.categories}</td>
             <td><span  onClick={()=>deleteCategories(categorie._id)}><i  className="fas fa-trash-alt"></i></span></td>
            </tr>
          )
        )}
    
    </tbody>
  </table>
    )
}
