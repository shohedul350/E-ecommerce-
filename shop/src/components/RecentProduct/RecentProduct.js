import React,{useEffect,useContext} from 'react'
import Product from '../../components/AllProduct/ProductList'
import Context from '../../context/productContext/productContext'
export default function RecentProduct() {
const {getLetestProduct} = useContext(Context)
useEffect(() => {
    getLetestProduct()
    
}, [])
    return (
        <div className="container">
            <h1>Recents Products</h1>
            <div className="row border-top border-primary p-2">
            <Product/>
            </div>
        </div>
       
    )
}
