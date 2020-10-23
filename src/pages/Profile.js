import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileWall from '../components/profile/ProfileWall'
import ProfileSidebar from '../components/profile/ProfileSidebar';
import { useEffect } from 'react';
import M from 'materialize-css';
import CreatePostModal from '../components/modals/CreatePostModal';
import AuthContext from '../context/auth/authContext';
import { useContext } from 'react';
import ProfileContext from '../context/profile/profileContext';


const Profile = ({match}) => {

    const profileContext = useContext(ProfileContext);

 
    const { userProfile, userPosts, numberOfPosts, profileImage, getUserProfile, getUserPosts, loading, error, imageUpload } = profileContext;
    
    const authContext = useContext(AuthContext);
    const { loadUser } = authContext;
   
    useEffect(()=>{
        loadUser();
        M.AutoInit();
       if(userProfile){
        getUserPosts(match.params.id);
       }
    },[]);

    useEffect(()=>{
        getUserProfile(match.params.id);
      
      },[match.params.id])
    
      console.log(userPosts);
    return (
        <div>
            <ProfileHeader 
            user={userProfile} 
            numberOfPosts={numberOfPosts}
            error={error}
            imageUpload={imageUpload}
            profileImage={profileImage}
             />
          
            <div className="row">
                <CreatePostModal/>
                <ProfileSidebar
                  user={userProfile}
                />
                <ProfileWall 
                profileImage={profileImage}
                user={userProfile}
                userPosts={userPosts} 
                loading={loading} />
            </div>
        </div>
    )
}

export default Profile
