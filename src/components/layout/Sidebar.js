import React, {Fragment} from 'react'
import RecentPosts from '../widgets/RecentPosts'

const Sidebar = ({recentPosts}) => {

    
    return (
        <Fragment>
            <RecentPosts recentPosts={recentPosts} />
        </Fragment>
    )
}

export default Sidebar
