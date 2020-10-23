import React from 'react'
import img from '../../images/30.jpg';

const CreatePost = ({profileImage}) => {
  
    return (
        <div className="row ">
     <a href='#create-form-modal' className='modal-trigger'>
            
        <div className="col s2">
            <img style={{width:'3.9rem',height:'3.9rem'}} src={profileImage ? `http://localhost:8000/uploads/${profileImage}` : img} alt='img' className='circle responsive-img'/>
        </div>
        <div className="input-field col s10">
            <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">What's on your mind?</label>
        </div>
     </a>
       
    </div>
    )
}

export default CreatePost
