import React from 'react'
import { useEffect } from 'react';
import M from 'materialize-css';
import AuthContext from '../context/auth/authContext';
import { useContext } from 'react';
import PostContext from '../context/post/postContext';
import Loader from '../components/layout/Loader';




const SinglePost = (props) => {

   console.log()
    const postContext = useContext(PostContext);
    const { getPost, loading, post } = postContext;
    const authContext = useContext(AuthContext);
   
    const { loadUser } = authContext;

    useEffect(()=>{
        getPost(props.match.params.id)
        loadUser();
        M.AutoInit();
      },[])
    
    if(loading){
        return <Loader />
    }

    return (
        <div className='card'>
           <div className="card-title">{post && post.title}</div>
           <div className="card-content">
              {post && post.content}
           </div>
        </div>
    )
}

export default SinglePost
