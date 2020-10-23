import React, { Fragment } from 'react'

const PersonalInfo = ({user}) => {
    return (
        <Fragment>
             <ul className='collection with-header z-depth-1'> 
            <li className="collection-header"><h4 className='thin'>Personal Info</h4></li>
                <li className="collection-item">
                    <div className="row">
                        <div className="col s5 grey-text text-darken-1">
                            Name
                        </div>
                        <div className="col s7 grey-text text-darken-3">
                            {user && user.name}
                        </div>
                    </div>
                </li>

                <li className="collection-item">
                    <div className="row">
                        <div className="col s5 grey-text text-darken-1">
                            Email
                        </div>
                        <div className="col s7 grey-text text-darken-3">
                            {user && user.email}
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    )
}

export default PersonalInfo
