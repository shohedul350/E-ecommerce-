import React,{useContext,useEffect} from 'react'
import Context from '../../context/productContext/productContext'

export default function StoreList() {
const {products,allItemProduct,deleteProduct} = useContext(Context)
    useEffect(()=>{
        allItemProduct()
    },[])
    return (
        <div>
            
    <table className="table table-sm ">
    <thead>
      <tr>
      <th scope="col">Product Image</th>
        <th scope="col">Product Name</th>
        <th scope="col">Categories</th>
        <th scope="col">Action</th>
    
      </tr>
    </thead>
    <tbody>
    


    {products.map(product=>(
            <tr>
            <td className="text-uppercase">
            <img
              src={`/${product.image}`}
              style={{width:"5rem",height:"5rem"}}
              className="img-fluid"
              alt="product"
              /></td>
            <td className="text-uppercase">{product.title}</td>
            <td className="text-uppercase">{product.categories}</td>
             <td><span onClick={()=>deleteProduct(product._id)} ><i  className="fas fa-trash-alt"></i></span></td>
            </tr>
 
          )
        )}
    
    </tbody>
  </table>
        </div>
    )
}
