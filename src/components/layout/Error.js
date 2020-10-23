import React from 'react'

const Error = ({msg}) => {
    return (
        <div className='center red-text'>
            <p style={{fontSize:'20px'}}>{msg}</p>
        </div>
    )
}

export default Error
