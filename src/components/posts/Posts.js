import React, { useContext } from 'react'
import PostItem from './PostItem'


import Loader from '../layout/Loader';


const Posts = ({posts, loading}) => {

   
    const noPosts = (
        <h2>
            No posts..
        </h2>
    );

    if(loading){
        return <Loader />
    }
    
    return (
        <div>
            {posts && posts.length != 0 ? posts.map(post => {
              
                return <PostItem key={post._id} post={post} />
            }) : noPosts }
        </div>
    )
}

export default Posts
