import { React } from 'react'
import styles from './Login.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const emailHandler = (e) => {
    setEmail(e.target.value)

  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)

  }


  const formHandler = (e) => {
    e.preventDefault()
    console.log("Email ->", email)
    console.log("Password ->", password)

    if (email === "" || password === "") {
      toast.error("Please fill all Fields")
    } else {
      toast.success('Login Successfully')
    }




  }

  return (
    <div>
      <div className={styles.loginF}>
        <form onSubmit={formHandler}>
          <div className={styles.title}>Login</div>
          <input type="email" onChange={emailHandler} placeholder="Agent ID" className={styles.user_input} value={email} />
          <input value={password} onChange={passwordHandler} type="password" placeholder="Agent password" className={styles.user_input} />
          <input type="submit" className={styles.submit_button} />
        </form>
      </div>
    </div>
  )
}
export default Login;