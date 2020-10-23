import React, { Fragment } from 'react'
import noPostsImg from '../../images/noPosts.jpg' 

const NoPosts = () => {
    return (
        <Fragment>
            <h5 className='thin'>No Posts</h5>
            <img style={{width:'200px',height:'200px'}} src={noPostsImg} alt='no posts' />
        </Fragment>
    )
}

export default NoPosts
