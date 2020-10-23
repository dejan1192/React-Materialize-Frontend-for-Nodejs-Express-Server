import React, { Fragment, useContext } from 'react'
import Loader from '../layout/Loader';
import NoPosts from '../layout/NoPosts';
import UserPostItem from './UserPostItem';
import AuthContext from '../../context/auth/authContext';



const StatusItem = ({userPosts, loading}) => {

  

    const authContext = useContext(AuthContext);
    const { user } = authContext;

    if(loading){
        return <Loader />
    }
   
    const showNoPosts = (
       <NoPosts />
    );
     console.log(userPosts);
    return (
        <div>
         
        { userPosts.length !== 0  && !loading? userPosts.map(post => {
          
            return   <UserPostItem key={post._id} post={post} />
        })
              
             : showNoPosts }
    </div>
    )
}

export default StatusItem
