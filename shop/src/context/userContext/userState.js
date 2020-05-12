import React,{useReducer} from 'react'
import axios from 'axios'
import UserContext from '../userContext/userContext'
import UserReducer from '../userContext/userReducer'
import setToken from '../../utils/setAdminToken'
import {
    SUCCES_REGISTER,
    SUCCES_LOGIN,
    SET_MESSAHE,
    CLEAR_MESSAGE,
    LOG_OUT,
    SET_USER,
    
} from '../type'

 const UserState=(props)=> {

    const initialState={
        user:{},
        userAuth:null,
        message:null,
    }

    const [state,dispatch]=useReducer(UserReducer,initialState)

// get Admin

 const getAdmin= async ()=>{
    if(localStorage.token){
        setToken(localStorage.token)
      }

      try{
          const res=await axios.get('/api/user')

          console.log(res)
          dispatch({
              type:SET_USER,
              payload:res.data
          })

      }catch (err){

        console.log(err)
         dispatch({
             type:SET_MESSAHE,
             payload:err.response.data
         })
      }
 }

    //register
const registerAdmin = async userData=>{
const config={
    header:{
        'Content-Type':'application/json'
    }
}
try{
    const res=await axios.post('/api/admin/register',userData,config)
    dispatch({
   type:SUCCES_REGISTER,
    payload:res.data
    })

}catch (err){  
   console.log(err) 
   dispatch({
       type:SET_MESSAHE,
       payload:err.response.data
   })
}
}


  
    //Login
    const loginAdmin = async userData=>{
        const config={
            header:{
                'Content-Type':'application/json'
            }
        }
        try{
            const res=await axios.post('/api/user/login',adminData,config)
            dispatch({
        type:SUCCES_LOGIN,
        payload:res.data
            })
        
        }catch (err){
          console.log(err)  
           dispatch({
               type:SET_MESSAHE,
               payload:err.response.data
           })
        }

        }

        // log out

        const logout=()=>{
            dispatch({
                type:LOG_OUT
            })
        }

        // const setError= err=>{
        //     dispatch(
        //         {
        //             type:SET_ERROR,
        //             payload:err
        //         }
        //     )
        // }

        const clearMessage=()=>{
            dispatch(
                {
                    type:CLEAR_MESSAGE,
                    
                }
            )
        }
    
    return (
        <UserContext.Provider value={{
         user:state.user,
        userAuth:state.adminAuth,
        message:state.message,
        getUser,
        registerAdmin,
        loginAdmin,
        logout,
        clearMessage
    }}>
       {props.children}
    </UserContext.Provider >
    )
}

export default UserState;