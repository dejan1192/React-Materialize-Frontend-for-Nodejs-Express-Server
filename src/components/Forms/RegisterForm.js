import React, { Fragment, useState } from 'react'



const RegisterForm = ({registerUser}) => {

    const [ user, setUser] = useState({
        name:'',
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
        registerUser(user);
      
    
       
        
    }


    const clearFields = (e) => {
        e.preventDefault();
    
    }


    return (
       <Fragment>
        <form onSubmit={handleSubmit} style={{padding:'2rem'}}>

            <div className="row">
                    <div className="input-field">
                        <input onChange={handleChange} type="text" name="name" id="name"/>
                        <label htmlFor="name">Name</label>
                    </div>
                </div>

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
                        <button type="submit" className='btn light-blue darken-3 full'>Register</button>
                    </div>
                </div>
            
            </form>
       </Fragment>
    )
}

export default RegisterForm
