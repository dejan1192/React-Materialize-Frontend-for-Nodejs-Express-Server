import React, { useEffect, useRef } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2'
import PostContext from '../../context/post/postContext';
import ProfileContext from '../../context/profile/profileContext';


const CreatePostModal = () => {

    const profileContext = useContext(ProfileContext);
    const postContext = useContext(PostContext);
    const {  getUserPosts, userProfile, createPost } = profileContext;
 

    

    const postImage = useRef();
    const [post, setPost] = useState({
        title:'',
        content:''
        
    });

  

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const file = postImage.current.files[0];
     
        if(post.title === '' || post.content === ''){
            Swal.fire({
                title:"All fields required",
                icon:'error'
            })
        }

        if(file){
            const data = new FormData();
            data.append('title', post.title);
            data.append('content', post.content);
            data.append('image', file);
            createPost(data);
           

        }else {
            
            createPost(post);
        }

       
     
    }

    

    return (
        <div id='create-form-modal' className='modal col s11  m4 offset-m2' >
           <div className="modal-content">
           <h4>Create Post</h4>
            <form onSubmit={handleSubmit}>
        

            <div className="row">
                <div className="input-field">
                  
                    <input onChange={handleChange} type="text" name="title" id="title"/>
                    <label htmlFor="title">Title</label>
                </div>
            </div>
    
           <div className="row">
           <div className="input-field">
               <i className="material-icons prefix">edit</i>
                <textarea onChange={handleChange} id='textarea2'
                name='content' className="materialize-textarea"></textarea>
                <label htmlFor="textarea2">What's on your mind?</label>
            </div>
           </div>
           
           <div className="row">
             <div className="input-field">
                 <input ref={postImage}  type="file" name="image" id="image"/>
             </div>
           </div>

            <div className="input-field">
               <button onClick={handleSubmit} className='modal-close btn light-blue darken-3 full'>Save</button>
            </div>
            </form>
           </div>
        </div>
    )
}


export default CreatePostModal
