import React,{useContext,useState} from 'react';
import  './search.css';
import {useHistory } from 'react-router-dom'
import Context from '../../context/productContext/productContext'

export default function SearchBar(props) {
const {getSearchProduct} = useContext(Context);
const [term,setTerm]=useState('');
const history = useHistory();
  
const onChange=e=>{setTerm({...term,[e.target.name]:e.target.value})}

const onSubmit=e=>{
    e.preventDefault();
    getSearchProduct(term)
    history.push('/search')
  }


    return (
      
        <div class="col-md-8 ">
          <div class="s002">
      <form   onSubmit={onSubmit} >
      
        <div class="inner-form">
          <div class="input-field first-wrap">
            
            <input id="search" 
            type="text" 
            name="term"
            placeholder="What are you looking for?" 
            onChange={e=> onChange(e)}/>
          </div>
          
          <div class="input-field fifth-wrap">
            <button class="btn-search" type="submit">SEARCH</button>
          </div>
        </div>
      </form>
    </div>
          
            
                    {/* <form className="form-inline"
                    onSubmit={onSubmit} >
                    <input class=" mr-sm-2 rounded"
                     type="search"
                      placeholder="Search Your Product"
                      name="term"
                      aria-label="Search"
                      onChange={e=> onChange(e)}
                      required
                    style={{width:"85%",
                    height:'40px'}}/>
                    <button class="btn btn-outline-success my-2 my-sm-0" 
                    type="submit"
                   >Search</button>
                  </form> */}
                </div>
    )
}
