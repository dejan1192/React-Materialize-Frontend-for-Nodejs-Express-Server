import React from 'react';
import CreatePost from '../profile-widgets/CreatePost';
import UserPosts from '../posts/UserPosts';

const ProfileWall = ({userPosts, loading, user, profileImage}) => {
    return (
        <div className='col s12 m8'>
            <CreatePost
              profileImage={profileImage}
            />
            <UserPosts
          
            user={user} 
            userPosts={userPosts} 
           
            loading={loading}
            />
        </div>
    )
}

export default ProfileWall
