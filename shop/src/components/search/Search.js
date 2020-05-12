import React,{useEffect,useContext} from 'react';
import Context from '../../context/productContext/productContext'
import Product from '../../components/AllProduct/Product'

export default function Search() {
    const { searchProduct } = useContext(Context)
    console.log(searchProduct)
    // useEffect(()=>{

    // },[])
    return (
        <React.Fragment>
        <div className="row">
        {
                    !searchProduct.length ? (
                        <div className="container" style={{height:"370px"}}>
                    <h3 className="text-center  pt-5">Nothing Found</h3>
                    </div>
                    ): (
                        searchProduct.map((product,key)=>{
                return  <Product key={product._id} product={product}/>
                            
                        }
                    ))
        }
        </div>
        </React.Fragment>
    )
}
