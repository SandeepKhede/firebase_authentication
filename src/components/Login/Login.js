import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import InputControl from '../InputControl/InputControl'
import {signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
// import { auth } from '../../firebase'
import { auth,provider } from '../../firebase'
import styles from './Login.module.css'
import GoogleButton from 'react-google-button'
const Login = () => {
  const [values,setValues] = useState({
    email:"",
    pass:""
  })
  // for handling errors
  const[errorMsg,setErrorMsg] = useState('')

  //disable button for preventing api call during login
  const[submitButtonDisable,setsubmitButtonDisable] = useState(false)

  const navigate = useNavigate();

  const signInGoogle = () =>{
    signInWithPopup(auth,provider).then((res) =>{
      const user = res.user;
      setsubmitButtonDisable(false)
      if(user){

        navigate("/")
      }
    }).catch((err) => {
      setErrorMsg(err.message)
      setsubmitButtonDisable(false)
    })
  }

  
  const handleSubmission = () => {
    if(!values.email || !values.pass){
        setErrorMsg("Please Fill all fields")
        console.log(values.email)
        return
    }
    setErrorMsg("")

    setsubmitButtonDisable(true)

    signInWithEmailAndPassword(auth,values.email,values.pass)
    .then
    (async(res) => {

      setsubmitButtonDisable(false)
      // login success then redirect to home
      navigate("/")
      
    }
    )
    .catch((err) => {
      setErrorMsg(err.message)
      setsubmitButtonDisable(false)
    })
  }
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Login</h1>
          <InputControl label='Email' type='text' placeholder='Enter Email' onChange={(event) => setValues((prev) => ({...prev,email:event.target.value}))}/>
          <InputControl label='Password' type='password' placeholder='Enter Password' onChange={(event) => setValues((prev) => ({...prev,pass:event.target.value}))}/>

          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
              <button disabled={submitButtonDisable} onClick={handleSubmission}>LogIn</button>
              <GoogleButton onClick={signInGoogle} /> 
              <p>Don't have an account ? <span>
                <Link to='/signup'>SignUp Now</Link></span></p>
          </div>
        </div>
    </div>
  )
}

export default Login