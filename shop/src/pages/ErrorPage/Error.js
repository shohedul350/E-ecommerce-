import React from 'react'
import {Link} from 'react-router-dom'

 const Error = (props) => {
    return (
        <div class="container">
          <div class="row">
            <div className="col-10 mx-auto text-center text-title  pt-5">
            <h1 class="text-danger display-2">Oops!</h1>
            <h2 class="dispaly-3">404 - Page not found</h2>
               
                <h3>The request URL 
                    <span className="text-danger">
                        {props.location.pathname}

                    </span>{""}
                    was not found
                </h3>
                <Link to="/">Go Home</Link>
                </div>  
          </div>  
        </div>
    )
}

export default Error

