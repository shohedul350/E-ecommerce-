import React,{useEffect,useContext} from 'react';
import Message from './message'
import AdminContext from '../../context/adminContext/adminContext'

export default function NavBar() {
    const {getAdmin,admin} = useContext(AdminContext);
   
 
    useEffect(()=>{
        getAdmin()
    },[])
    return (
          <div>

        <div className="bg-dark" style={{height:"40px"}}>
           <p className="mr-auto text-center " style={{color:"white"}}>Your Name: {admin.name} | your Email: {admin.email}</p> 
           
        </div>
        <Message/>
      
        </div> 
        
    )
}
