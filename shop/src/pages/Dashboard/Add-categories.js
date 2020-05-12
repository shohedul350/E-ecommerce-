import React from 'react'
import NavBar from '../../components/Dashboard/NavBar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Addcategories from '../../components/Dashboard/categories'


export default function UploadPage() {

    return (
        <div className="">
            <NavBar/>
             <div className="row">
            <div className="col-md-3">
              <Sidebar/>
            </div>
            <div className="col-md-9">
                 <Addcategories/>
            </div>
        </div>
         
     </div>
    )
}
