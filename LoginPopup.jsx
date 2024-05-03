/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ( {setShowLogin}) => {

    // eslint-disable-next-line no-unused-vars
    const [currState,setCurrState] = useState("Login")

  return (
      <div className="container">
            <form className='login-popup-container'>
            <div className="form-box">
            <h1 id="title">{currState}</h1>
            <img  onClick ={()=>setShowLogin(false)} src={assets.cross_icon}  />
            </div>
            <div className='login-popup-inputs'>
                {currState==="Login"?<></>:
                    <input type="text" placeholder="Enter Your Name" required/>
            }
                    <input type="text" placeholder="Enter Your Email" required/>
                    <input type="password" placeholder="Enter Your Password"required/>
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required/>
                <p> By continuing,i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"?
            <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here </span></p>:
            <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login</span></p>}

            
            </form>
            </div>
        
    
  )
}

export default LoginPopup
