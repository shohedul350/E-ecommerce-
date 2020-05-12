import React from 'react'
import NavBar from '../../components/Dashboard/NavBar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Upload from '../../components/Dashboard/upload'


export default function UploadPage() {
    return (
        <div className="">
            <NavBar/>
             <div className="row">
            <div className="col-md-3">
              <Sidebar/>
            </div>
            <div className="col-md-9">
                 <Upload/>
            </div>
        </div>
         
     </div>
    )
}
