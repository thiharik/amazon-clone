import React, { useState } from 'react'
import "./Login.css"




function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signIn =e=>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
    }
    const register = e=>{e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          console.log(auth);
          })
        .catch(error=>alert(error.message))
    }

  return (
    <div className='login'>
    <Link to ="/">
      <img className='login__logo'
           src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
           alt=''
       />
    </Link>
     <div className='login_container'>
      <h1>Sign-in</h1>
      <form>
        <h5>E-mail</h5>
        <input type='text'
               value={email}
               onChange={e=>setEmail(e.target.value)}
        />
        
        <h5>Password</h5>
        <input type='password'
            value={password}
            onChange={e=>setPassword(e.target.value)}
        />

        <button 
            type='submit'
            onClick= {signIn}
            className='login-signInButton'>
            Sign In
        </button>
      </form>
      <p>
       By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>
      <button
        onClick={register} 
        className='login_registn'>
        Create Your Amazon Account
      </button>
     </div>
    </div>
  )
}

export default Login