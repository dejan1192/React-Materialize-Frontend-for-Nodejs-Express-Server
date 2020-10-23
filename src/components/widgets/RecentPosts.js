import React from 'react'

const RecentPosts = ({recentPosts}) => {
    return (
        <ul className='collection'>
            {recentPosts && recentPosts.length > 0 ? 
        (<div>
            <h5 className='thin'>Recent Posts</h5>
          
        {recentPosts.map(post => {
            return <a key={post._id} href='#' className="collection-item">{post.title} by <span className='red-text text-darken-2'>{post.author.email}</span></a>
        })}
               
           
       </div>) : <h5>No posts..</h5>
        }
        </ul>
    )
}

export default RecentPosts
