import React, {useState} from 'react'
import img from '../../images/30.jpg';
import bg from '../../images/network.jpg'
import Swal from 'sweetalert2';
import { useRef } from 'react';
import { useEffect } from 'react';


const ProfileHeader = ({user, numberOfPosts, error, imageUpload, profileImage}) => {
    

    const imageUploadBtn = useRef();
  useEffect(()=>{
    if(error){
        Swal.fire({
            title:error,
            icon:'error'
        })
    }
  },[])
  
   
  const handleChange = (e) => {
      const file = imageUploadBtn.current.files[0];
      console.log(file);
      if(file.size > 2097152){
          Swal.fire({
              title:'File exceeds maximum size limit of 2Mb',
              icon:'error'
          })
      }else if(file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png'){
          Swal.fire({
              title:'Invalid file type.',
              icon:'error'
          })
      }else {
          const data = new FormData();
          data.append('image', file);
          imageUpload(data);
      }
     
  }

    const uploadImage = () => {
      
        console.log(imageUploadBtn.current)
        imageUploadBtn.current.click();
     
      
        
            // const data = new FormData();
            // data.append('image', file);
            // imageUpload(data);
        
     

        
    };

    return (
   
        <div  className='card small'>
            <div className="card-image waves-effect waves-block waves-dark">
                <img src={bg} alt="img"/>
           
            </div>
         
            <div className='card-profile-image'>
                <img id='profile-image' onClick={uploadImage} src={profileImage  ? `http://localhost:8000/uploads/${profileImage}` : img} alt="img" className='circle responsive-img z-depth-2'/>
             
               <input ref={imageUploadBtn}
                 onChange={handleChange}
                 type="file" 
                 name="image" 
                 id="image" 
                 style={{display:'none'}}/>
              
               
            </div>
          
            <div className="card-content">
            <div  className='row valign-wrapper' >
                <div className="col s3 offset-s1">
                    <div className="card-title grey-text text-darken-4">
                    {user && user.name}
                    </div>
                </div>
                <div className="col s1 center-align">
                    <h4 className='card-title grey-text text-darken-4'>
                        {numberOfPosts}
                        
                    </h4>
                    <p className="grey-text">Posts</p>
                   
                </div>
                <div className="col s1 center-align ">
                    <h4 className="card-title grey-text text-darken-4">
                        3
                    </h4>
                    <p className="grey-text">Followers</p>
                   
                </div>
                <div className="col s1 right-align">
                    <a href="#" className="btn-floating waves-effect waves-dark">
                        <i className="material-icons pink ligten-2">account_circle</i> 
                    </a>
                </div>
            </div>
            </div>
        </div>
      
    )
}

export default ProfileHeader
