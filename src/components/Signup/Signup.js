import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import InputControl from '../InputControl/InputControl'
import {createUserWithEmailAndPassword} from 'firebase/auth'


import { auth } from '../../firebase'
import styles from './Singup.module.css'

const Signup = () => {
  // manage input values using this states
  const [values,setValues] = useState({
    name:"",
    email:"",
    pass:""
  })
  // managing error state
  const[errorMsg,setErrorMsg] = useState('')

  const[submitButtonDisable,setsubmitButtonDisable] = useState(false)




  const navigate = useNavigate();
  const handleSubmission = async () => {
    if(!values.name || !values.email || !values.pass){
        setErrorMsg("Please Fill all fields")
        return
    }
    setErrorMsg("")

    setsubmitButtonDisable(true)

    await createUserWithEmailAndPassword(auth,values.email,values.pass)
    .then
    ((res) => {

      setsubmitButtonDisable(false)
      const user = res.user;
      // redirecting to home after succesfull login
      if(user){
        navigate("/")
      }
      
    }
    )
    .catch((err) => {
      // catching error and store error message on state
      setErrorMsg(err.message)
      setsubmitButtonDisable(false)
    })
  }



  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Signup</h1>
          {/* custom input control component */}
            <InputControl label='Name' type='text' placeholder='Enter Name' onChange={(event) => setValues((prev) => ({...prev,name:event.target.value}))}/>
            <InputControl label='Email' type='text' placeholder='Enter Email'onChange={(event) => setValues((prev) => ({...prev,email:event.target.value}))} />
            <InputControl label='Password' type='password' placeholder='Enter Password' onChange={(event) => setValues((prev) => ({...prev,pass:event.target.value}))}/>

          <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
              <button disabled={submitButtonDisable} onClick={handleSubmission}>Signup</button>
  
              <p>Already have an account ? <span>
                <Link to='/login'>Login</Link></span></p>
          </div>
        </div>
    </div>
  )
}

export default Signup