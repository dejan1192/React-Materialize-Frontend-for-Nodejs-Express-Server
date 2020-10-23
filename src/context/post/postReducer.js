import {
    GET_POSTS,
    GET_POST,
    POST_ERROR,
    SET_LOADING,
    POSTS_ERROR,
    CREATE_POST
  
} from '../types';


export default (state, action) => {
    switch(action.type){

        case GET_POST:
            return{
                ...state,
                post:action.payload.post,
                loading:false,
                error:null
            }
        case POST_ERROR:
            return {
                ...state,
                post:null,
                loading:false,
                error:action.payload
            }

        case GET_POSTS:
            return {
                ...state,
                posts:action.payload.posts,
                recentPosts:action.payload.recentPosts,
                post:null,
                error:null,
                loading:false
            }

        case POSTS_ERROR:
            return {
                ...state,
                posts:null,
                post:null,
                error:action.payload,
                loading:false
            }
        case CREATE_POST:
            return {
                ...state,
                posts:[action.payload,...state.posts],
                error:null,
                loading:false
            }
   
        case SET_LOADING: 
            return {
                ...state,
                loading:true
            }
        

        default:
            return state;
    }
}