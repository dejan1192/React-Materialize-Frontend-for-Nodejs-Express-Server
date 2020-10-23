import React, { Fragment, useState } from 'react'
import { Link  } from 'react-router-dom';


const LoginForm = ({loginUser}) => {


    const [ user, setUser] = useState({
        email:'',
        password:''
    });
    

    const handleChange = (e) => {

        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(user);
       
        clearFields();
     
    }

    const clearFields = () => {
        
        setUser({
            email:'',
            password:''
        });
    }

    return (
          <Fragment>
                <form onSubmit={handleSubmit} style={{padding:'30px'}}>
                    <div className="row">
                        <div className="input-field">
                            
                            <input onChange={handleChange} type="text" name="email" id="email"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field">
                      

                            <input onChange={handleChange} type="text" name="password" id="password"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field">
                            <button type="submit" className='btn light-blue darken-3 full'>Login</button>
                        </div>
                    </div>
                <p className='text-grey text-darken-2'>No account? </p>
                    <Link to='/register' className="btn green">Register</Link>
            </form> 
          </Fragment>
       
    )
}

export default LoginForm
