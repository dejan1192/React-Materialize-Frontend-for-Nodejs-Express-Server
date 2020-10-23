import {
    GET_POSTS,
    SET_LOADING,
    GET_PROFILE,
    PROFILE_ERROR,
    POSTS_ERROR,
    CREATE_POST,
    DELETE_POST,
    DELETE_ERROR

  
} from '../types';


export default (state, action) => {
    switch(action.type){

        case GET_POSTS:
            return {
                ...state,
                userPosts:action.payload.posts,
                numberOfPosts:action.payload.numberOfPosts,
                error:null,
                loading:false
            }
        case GET_PROFILE:
            return {
                ...state,
                userProfile:action.payload.user,
                profileImage:action.payload.user.imageUrl,
                error:null,
                loading:false
            }
        case CREATE_POST:
            return {
                ...state,
                userPosts:[ action.payload.post,...state.userPosts],
                error:null,
                loading:false
            }
        
        case PROFILE_ERROR:
            return {
                ...state,
                profileImage:null,
                userProfile:null,
                error:action.payload,
                loading:false
            }

        case POSTS_ERROR:
            return {
                ...state,
                // userPosts:[],
                error:action.payload,
                loading:false
            }
      
        case SET_LOADING: 
            return {
                ...state,
                loading:true
            }
        case DELETE_POST:
            return {
                ...state,
                loading:false,
                userPosts:state.userPosts.filter(post => post._id !== action.payload.deleted_post),
                error:null

            }
        case DELETE_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }

        default:
            return state;
    }
}