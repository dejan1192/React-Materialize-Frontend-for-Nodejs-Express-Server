import React from 'react'
import AboutMe from '../profile-widgets/AboutMe'
import PersonalInfo from '../profile-widgets/PersonalInfo'

const ProfileSidebar = ({user}) => {
    return (
        <div id='profile-sidebar' className='col s12 m4'>
            <AboutMe />
            <PersonalInfo 
            user={user}
            />
           
        </div>
    )
}

export default ProfileSidebar
