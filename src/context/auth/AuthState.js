import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    REGISTER_ERROR,
    LOGIN_ERROR,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT_USER,
    LOGOUT_ERROR,
    SET_REGISTERED,
    CLEAR_ERRORS
} from '../types';



const AuthState = (props) => {

    const initialState = {
        user:null,
        user_id:null,
        registrationSuccessfull:null,
        isAuthenticated:null,
        loading:true,
        error:null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //load user
    const loadUser = async() => {
       
        const config = {
            withCredentials:true
        }

        try {
            const res = await axios.get('http://localhost:8000/auth', config);

           
            dispatch({
                type:USER_LOADED,
                payload:res.data
            })
        } catch (error) {
            
            dispatch({
                type:AUTH_ERROR,
                
            })
        }
    };

    //login user
    const loginUser = async (user) => {
        
       
        const config = {
            headers:{
                'Content-Type':'application/json'
            },withCredentials:true
             
        }
        try {
            
            const res = await axios.post('http://localhost:8000/auth/login', user, config);
            
            console.log(res);
            dispatch({
                type:LOGIN_USER,
                payload:res.data
            })

            
        } catch (error) {
            
            console.log(error);

            dispatch({
                type:LOGIN_ERROR,
                payload:error.response.data.error
            })
        }
    }

    const registerUser = async (user) => {

        const config = {
            header:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        }

        try {
            
            const res = await axios.post('http://localhost:8000/auth/register', user, config);

            console.log(res);

            dispatch({
                type:REGISTER_USER,
                payload:res.data
            })

        } catch (error) {
            
            dispatch({
                type:REGISTER_ERROR,
                payload:error.response.data.error
            })
        }
    };

    const registredValueReset = () => {

        dispatch({
            type:SET_REGISTERED
        })
    };

    const logout = async () => {

      const config = {
          withCredentials:true
      }

        try {
            const res = await axios.get('http://localhost:8000/auth/logout', config);

           

            dispatch({
                type:LOGOUT_USER,
                payload:res.data
            })
        } catch (error) {
            
            dispatch({
                type:LOGOUT_ERROR,
                paylaod:error.response.data.error
            })
        }
    };

    const clearErrors = () => {

        dispatch({
            type:CLEAR_ERRORS
        })
    };
    
    

    return (
        <AuthContext.Provider
        value={{
          user:state.user,
          user_id:state.user_id,
          registrationSuccessfull:state.registrationSuccessfull,
          loading:state.loading,
          isAuthenticated:state.isAuthenticated,
          error:state.error,
          registredValueReset,
          clearErrors,
          loginUser,
          loadUser,
          registerUser,
          logout
        }}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthState;