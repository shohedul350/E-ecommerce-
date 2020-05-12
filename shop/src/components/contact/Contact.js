import React,{useState,useContext} from 'react'
import contactContext from '../../context/contactContext/contactContext'

function Contact() {

    const {addContact,errors,success,clearError,clearSuccess} = useContext(contactContext);

    const [formData,setFormData]=useState({
       Name:"",
       Email:"",
       Phone: "",
       Subject:"",
       Message:""
   
  });

  const {Name,Email,Phone,Subject,Message} =formData

const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value});}


     const onSubmit=e=>{
        e.preventDefault();
        addContact(formData);
        setFormData({
         Name:"",
        Email:"",
        Phone: "",
        Subject:"",
        Message:""});
        alert('successfully send')
     }
    return (
        <div  className="card p-3">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
        <p className="text-center w-responsive mx-auto mb-2">Do you have any questions? Please do not hesitate to contact us directly. I will come back to you within
            a matter of hours to help you.</p>
    
        <div className="row">
    
         
            <div className="col-md-9 mb-md-0 mb-3">
            <form onSubmit={e=>onSubmit(e)}>
    
               
                    <div className="row">
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text"
                                 id="name"
                                 placeholder="Your Name"
                                  name="Name"
                                  className="form-control"
                                  value={Name}
                                  onChange={e=> onChange(e)}
                                  required/>
                               
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" 
                                id="email" 
                                name="Email" 
                                placeholder="Your Email"
                                className="form-control"
                                value={Email}
                                onChange={e=> onChange(e)}
                                required
                                />
                                
                            </div>
                        </div>
                
    
                    </div>
                   
                    <div className="row">
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" 
                                id="subject" 
                                placeholder="Your Phone"
                                name="Phone" 
                                className="form-control"
                                value={Phone}
                                onChange={e=> onChange(e)}
                                />
                               
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" 
                                id="subject" 
                                name="Subject" 
                                placeholder="Your Subject"
                                className="form-control"
                                value={Subject}
                                onChange={e=> onChange(e)}
                                required
                                />
                    
                            </div>
                        </div>
                    </div>
                 
                    <div className="row">
                        <div className="col-md-12">
    
                            <div className="md-form">
                                <textarea type="text"
                                 id="message" name="Message" 
                                 placeholder="Your Message"
                                 rows="2" 
                                 value={Message}
                                 className="form-control md-textarea"
                                 onChange={e=> onChange(e)}
                                 required
                                 ></textarea>
                    
                            </div>
    
                        </div>
                    </div>
        
    
               
    
                <div className="text-center text-md-left">
                    <button type="submit" className="btn btn-primary" >Send</button>
                </div>
                </form>
 <div className="status">{success !== null ?  <div className="card bg-success text-center p3"><p className="text-white">{success} </p> {clearSuccess()}</div>  : null}
</div>
            </div>
         
            <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                        <p>Badda,Dhaka,Bangladesh</p>
                    </li>
    
                    <li><i className="fas fa-phone mt-4 fa-2x"></i>
                        <p>01710488865</p>
                    </li>
    
                    <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                        <p>shohedul360@gmail.com</p>
                    </li>
                </ul>
            </div>
           
            </div>
            
            </div>
    
    )
}

export default Contact;