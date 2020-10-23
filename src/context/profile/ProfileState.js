import React from 'react'
import { useReducer } from 'react';
import ProfileContext from './profileContext';
import ProfileReducer from './profileReducer';
import axios from 'axios';

import {
    GET_POSTS,
    GET_PROFILE,
    PROFILE_ERROR,
    POSTS_ERROR,
    CREATE_POST,
    SET_LOADING,
    DELETE_POST,
    DELETE_ERROR
} from '../types';

const ProfileState = (props) => {

    const initialState = {
        userProfile:null,
        profileImage:null,
        loading:false,
        userPosts:[],
        numberOfPosts:0,
        error:null,
        loading:true
    }

    const [state, dispatch] = useReducer(ProfileReducer, initialState);

    const getUserProfile = async (userId) => {

        const config = {
            withCredentials:true
        }

        getUserPosts(userId);

        try {
            const res = await axios.get(`http://localhost:8000/profile/${userId}`, config);

           
            dispatch({
                type:GET_PROFILE,
                payload:res.data
            })

        } catch (error) {
           
            dispatch({
                type:PROFILE_ERROR,
                payload:error.response.data.error
            })
        }
    };
    
    const createPost = async (post) => {

     
        setLoading();
        const config = {
      
            withCredentials:true
        }
    
        try {
            
            const res = await axios.post('http://localhost:8000/posts', post, config);
    
           
            dispatch({
                type:CREATE_POST,
                payload:res.data
            })
    
        } catch (error) {
            
            console.log(error);
        }
     }

     const deletePost = async(postId) => {

        setLoading();
        const config = {
          withCredentials:true
        };

        try {
            const res = await axios.delete(`http://localhost:8000/posts/${postId}`, config);

            console.log(res);

            dispatch({
                type:DELETE_POST,
                payload:res.data
            })

        } catch (error) {
            
            console.log(error);
            dispatch({
                type:DELETE_ERROR,
                payload:error.response.data.error
            })
        }
     };

    const getUserPosts = async(userId) => {

        const config = {
            withCredentials:true
        }

        try {
            const res = await axios.get(`http://localhost:8000/profile/${userId}/posts`, config);
            
            dispatch({
                type:GET_POSTS,
                payload:res.data
            })

        } catch (error) {
            
            dispatch({
                type:POSTS_ERROR,
                payload:error.response.data.error
            })
        }
    };

    const imageUpload = async(data) => {
      
       console.log(data);
        const config = {
             headers: 
             { 'Content-Type': 'multipart/form-data' },
       
        withCredentials:true
    };
        try {
            const res = await axios.post('http://localhost:8000/profile/upload', data, config);
           
            console.log(res);
        } catch (error) {
            console.log(error);
            // console.log(error.response.data.error);
        }
    };
    const setLoading = () => {

        dispatch({
            type:SET_LOADING
        })
     }
    return (
        <ProfileContext.Provider
        value={{
            userProfile:state.userProfile,
            userPosts:state.userPosts,
            profileImage:state.profileImage,
            numberOfPosts:state.numberOfPosts,
            error:state.error,
            loading:state.loading,
            getUserPosts,
            imageUpload,
            createPost,
            deletePost,
            getUserProfile
        }}
        >
            {props.children}
        </ProfileContext.Provider>
    )
}


export default ProfileState
