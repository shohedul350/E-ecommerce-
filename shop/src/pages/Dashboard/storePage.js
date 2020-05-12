import React from 'react'
import NavBar from '../../components/Dashboard/NavBar'
import Sidebar from '../../components/Dashboard/Sidebar'
import StoreList from '../../components/Dashboard/StoreList'


export default function StorePage() {

    return (
        <div className="">
            <NavBar/>
             <div className="row">
            <div className="col-md-3">
              <Sidebar/>
            </div>
            <div className="col-md-9">
                 <StoreList/>
            </div>
        </div>
         
     </div>
    )
}
