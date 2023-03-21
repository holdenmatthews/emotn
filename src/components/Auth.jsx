import { useState, useContext } from 'react'
import AuthContext from '../store/authContext'
import axios from 'axios'

const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(true)

  const baseURL = 'http://localhost:4444'

  const authCtx = useContext(AuthContext)

  const submitHandler = e => {
    e.preventDefault()

    register ? (
      axios.post(`${baseURL}/api/register`, {username, password})
          .then((res) => {
              console.log(res.data)
              authCtx.login(res.data.token, res.data.exp, res.data.userId)
          })
          .catch((err) => {
              console.log(err)
              alert("That username is already taken :(")
              setUsername("")
              setPassword("")
          })
     ) : (
      axios.post(`${baseURL}/api/login`, {username, password})
          .then((res) => {
              console.log(res.data)
              authCtx.login(res.data.token, res.data.exp, res.data.userId)
          })
          .catch((err) => {
              console.log(err)
              alert("Unable to login. Incorrect username or password.")
              setUsername("")
              setPassword("")
          })
     )
  }

  const handleClick = () => {
    setRegister(!register)
   }
 
   return (
       <main>
           <h1>Welcome!</h1>
           <form onSubmit={submitHandler}>
               <input
                   type="text"
                   value={username}
                   placeholder="username"
                   onChange={(e) => setUsername(e.target.value)}
                   />
               <input
                   type="password"
                   value={password}
                   placeholder="password"
                   onChange={(e) => setPassword(e.target.value)}
                   />
               <button>
                   {register ? 'Sign Up' : 'Login'}
               </button>
           </form>
           <button onClick={handleClick}>Need to {register ? 'Login' : 'Sign Up'}?</button>
       </main>
   )
}
 
export default Auth