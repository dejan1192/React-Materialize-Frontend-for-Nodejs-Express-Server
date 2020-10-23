import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Posts from '../components/posts/Posts'
import { useEffect } from 'react';
import M from 'materialize-css';
import AuthContext from '../context/auth/authContext';
import { useContext } from 'react';
import PostContext from '../context/post/postContext';

const Home = () => {

    const postContext = useContext(PostContext);
    const { posts,getPosts, loading, recentPosts } = postContext;
    const authContext = useContext(AuthContext);
   
    const { loadUser } = authContext;

    useEffect(()=>{
        loadUser();
        getPosts();
        M.AutoInit();
      },[])
    

    return (
        <div className='row'>
            <div className="col s12 m7">
                <Posts 
                posts={posts} 
                loading={loading}/>
            </div>

            <div className="col m3 offset-m1 hide-on-small-only">
                <Sidebar 
                recentPosts={recentPosts} />
            </div>
        </div>
    )
}

export default Home
