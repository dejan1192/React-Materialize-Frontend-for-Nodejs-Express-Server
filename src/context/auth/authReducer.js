
import {
    LOGIN_USER,
    SET_LOADING,
    LOGIN_ERROR,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_USER,
    SET_REGISTERED,
    REGISTER_ERROR,
    CLEAR_ERRORS,
    LOGOUT_USER
} from '../types';


export default (state, action) => {
    switch(action.type){

        case LOGIN_USER:
         
            return {
                ...state,
                user_id:action.payload.user,
                isAuthenticated:true,
                loading:false,
                registrationSuccessfull:false
            }
            
        case USER_LOADED:
       
            return{
                ...state,
                isAuthenticated:true,
                user_id:action.payload._id,
                user:action.payload.user,
                loading:false
                
            }

        case REGISTER_USER:
            return {
                ...state,
                registrationSuccessfull:true
            }
        

        
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        case REGISTER_ERROR:
        case AUTH_ERROR:
        case LOGIN_ERROR:
        case LOGOUT_USER:
           
            //remove cookie
            return {
                ...state,
                user_id:null,
                isAuthenticated:null,
                registrationSuccessfull:false,
                loading:false,
                error:action.payload
            }
        case SET_REGISTERED:
            return {
                ...state,
                registrationSuccessfull:null,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }
        

        default:
            return state;
    }
}