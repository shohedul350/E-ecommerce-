import React from 'react'
import {Link} from 'react-router-dom'

export default function Top() {
    return (
    <div className="ml-5 p-0">
  <div className="row">
    <div className="col">
            <p><i class="fas fa-phone"></i>01710488865</p>
    </div>
    <div className="col ">
            <p><i class="fas fa-envelope-square"></i> bestChoice@gmail.com</p>
    </div>
    <div className="col">
             <p><i class="fas fa-clock"></i>Open 24 Hours</p>
    </div>
    <div className="col">
            <p><i class="fas fa-map-marker-alt"></i>Your Location</p> 
    </div>
    <div className="col">
                <a href="https://shohedul.netlify.app/" target="_blank" className="fa fa-dribbble"></a>
                <a href="https://www.facebook.com/shohedul350" target="_blank" className="fa fa-facebook ml-3"></a>
                <a href="https://twitter.com/shohedul350" target="_blank" className="fa fa-twitter ml-3"></a>
                <a href="https://www.linkedin.com/in/shohedul350/" target="_blank" className="fa fa-linkedin ml-3"></a>
                <a href="https://www.instagram.com/shohedul350/" target="_blank" className="fa fa-instagram ml-3"></a>
            
    </div>
  </div>
</div>
    )
}
