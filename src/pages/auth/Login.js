import React from 'react'
import LoginForm from '../../components/Forms/LoginForm';
import login from '../../images/login.gif';
import AuthContext from '../../context/auth/authContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Login = (props) => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, loginUser, registredValueReset, error, clearErrors} = authContext;
  
    useEffect(()=>{
        registredValueReset();
        clearErrors();
    },[]);

    useEffect(()=>{
       if(isAuthenticated){
           props.history.push('/');
    
       }
      
    },[isAuthenticated])
    
    return (
       <div  className="row">
            <div className='col s12 m10 offset-m1 l6 offset-l3 xl4 offset-xl4 z-depth-1 card-panel '>
            <div className="row">
                <div className="input-field col s12 center">
                    <img style={{width:'250px'}}src={login} alt='login' className='circle responsive-img' />
                    <h5 className='center'>User Login</h5>
                </div>
            </div>

          <LoginForm loginUser={loginUser} />
         
          
           
        </div>
       </div>
    )
}

export default Login
