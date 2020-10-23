import PostContext from './postContext';
import PostReducer from './postReducer';
import React from 'react';
import { useReducer } from 'react';
import axios from 'axios';
import {
    GET_POSTS,
    GET_POST,
    POST_ERROR,
    POSTS_ERROR,
    SET_LOADING,
    CREATE_POST
}
from '../types';




const PostState = (props) => {

    const initialState = {
        posts:[],
        recentPosts:null,
        post:null,
        loading:false,
        error:null
    }

    const [ state, dispatch ] = useReducer(PostReducer, initialState);


 const getPost = async (id) => {

    const config = {
        withCredentials:true
    }

    

    try {
        const res = await axios.get(`http://localhost:8000/posts/${id}`, config);
        console.log(res);
        
        dispatch({
            type:GET_POST,
            payload:res.data
        })

    } catch (error) {
        
        dispatch({
            type:POST_ERROR,
            payload:error.response.data.error
        })
    }

 };

 const getPosts = async() => {

    const config = {
        withCredentials:true
    }
    try {

        setLoading();
        const res = await axios.get('http://localhost:8000/posts', config);
         
      
        dispatch({
            type:GET_POSTS,
            payload:res.data
        })

    } catch (error) {
        console.log(error);
        
        dispatch({
            type:POSTS_ERROR,
            payload:error.response.data.error
        })
    }
 }


 const setLoading = () => {

    dispatch({
        type:SET_LOADING
    })
 }



    return (
        <PostContext.Provider
        value={{
            posts:state.posts,
            post:state.post,
            loading:state.loading,
            error:state.error,
            recentPosts:state.recentPosts,
            getPosts,
            getPost
            
        }}
        >
            {props.children}
        </PostContext.Provider>
    )
}

export default PostState

