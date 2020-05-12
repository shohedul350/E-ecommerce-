import React from 'react'
import {Link} from 'react-router-dom'


 const Footer = () => {
    return (
        <div className="text-center bg-dark">
             <h4 className="card-text py-2"><small className="text-white">Best Choice Online Shop  || <Link to="https://shohedul.netlify.com/"><i class="fas fa-link"></i>Design And Develop By Shohedul.</Link></small></h4>
        </div>
    )
}
export default  Footer;