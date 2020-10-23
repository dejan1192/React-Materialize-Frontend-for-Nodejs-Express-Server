import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react'
import Swal from 'sweetalert2';
import RegisterForm from '../../components/Forms/RegisterForm'
import Error from '../../components/layout/Error';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, registerUser, error, registrationSuccessfull, clearErrors } = authContext;


    useEffect(()=>{
        clearErrors();
    },[]);

    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')
        }
    },[isAuthenticated]);

    useEffect(()=>{
        if(registrationSuccessfull){
            Swal.fire({
                title:"Registration successfull!",
                icon:'success'
            })
            props.history.push('/login');
        }
     
    },[registrationSuccessfull]);

    
    return (
        <div className='row'>
            {error &&  <Error msg={error} />}
            <div className='col s12 m10 offset-m1 l6 offset-l3 xl4 offset-xl4 z-depth-1 card-panel'>
                <div className="row">
                    <div className="input-field col s12 center">
                        {/* <img style={{width:'250px'}}src={login} alt='login' className='circle responsive-img' /> */}
                        <h5 className='center'>User Register</h5>
                    </div>
                </div>
                <RegisterForm registerUser={registerUser} registrationSuccessfull={registrationSuccessfull}/>
            </div>

           
        </div>
    )
}

export default Register
