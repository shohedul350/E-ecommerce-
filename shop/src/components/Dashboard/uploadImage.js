import React from 'react'

export default function UploadImage(props) {

  const onChangeHandler=e=>{
    props.refreshFunction(e.target.files[0])
  
  };
    return (
        <div className="">
        <div className="row">
          <div className="offset-md-3 col-md-6">

              <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file" className="form-control" name="updateImages" multiple="" onChange={(e)=>onChangeHandler(e)}/>                    
              </div>                       	      
          </div>
        </div>
      </div>
    )
}
