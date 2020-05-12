import React from 'react'
import Sidebar from './Sidebar'

export default function layout() {
    return (
        <div className="">
           <div className="row">
               <div className="col-md-3">
         <Sidebar/>
               </div>
               <div className="col-md-9">

               </div>
           </div>
            
        </div>
    )
}
