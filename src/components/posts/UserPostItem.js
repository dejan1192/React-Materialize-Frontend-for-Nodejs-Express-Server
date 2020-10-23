import React from 'react'
import { useState } from 'react'
import img from '../../images/30.jpg'
import { Link } from 'react-router-dom'
import M from 'materialize-css';
import { useEffect } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';



const PostItem = ({post}) => {

    const authContext = useContext(AuthContext);
    const profileContext = useContext(ProfileContext);
    const { deletePost } = profileContext;
    const { user } = authContext;

    useEffect(()=>{
        M.AutoInit();
    },[])

    const handleDelete = (e) => {
        e.preventDefault();
        deletePost(post._id);
        
    }


    const [mouseHover, setMouseHover] = useState(false);

    const pulse = mouseHover ? 'pulse' : '';
    
    
    return (

                <div id='post' className="card ">
            
                <div style={{paddingLeft:'4px'}} className="row valign-wrapper">
                    <div className="col s2 hide-on-small-only">
                      <Link id='post-img' to={`/profile/${post.author._id}`}>
                          <img className='circle responsive-img' src={post.author.imageUrl ? `http://localhost:8000/uploads/${post.author.imageUrl}` : img} alt="img"/>
                      </Link>
                    </div>
                    <div className="col s9 left-align">
                       <p style={{fontWeight:'bold'}} className=" grey-text text-darken-3 " >{post.author.email}</p>
                  
                    <span className='small-text  grey-text text-darken-1 '>
                          Posted {post.createdAt}
                     </span>
                    </div>
                    <div className="col s1 right-align">
                    
                    { user._id == post.author._id &&
                     <i
                     onClick={handleDelete}
                     id='delete-post'
                     className="material-icons">delete</i> }
          

       
                 
                    </div>
              
                </div>
              
              
               {post.imageUrl &&  <div className="card-image">
                <img className='responsive-img ' src={`http://localhost:8000/uploads/${post.imageUrl}`} alt='img' />
                       
                        <a onMouseOut={()=>setMouseHover(false)} onMouseOver={()=>setMouseHover(true)} className={'btn-floating halfway-fab waves-effect red ' +  pulse}>
                                <i className='material-icons text-red lighten-3'>favorite</i>
                            </a>
                </div>}
                <h3 className="card-title">
                    {post.title}
                </h3>
               
                <div className="card-content">
                    <p>{post.content}</p>
                </div>

              <div className="card-action right-align">
                  <Link to={'/show/'+post._id }>Read more..</Link>
              </div>
            </div>
     
      
    )
}

export default PostItem
