import { useState, useContext, useEffect } from 'react'
import AuthContext from '../store/authContext'
import axios from 'axios'
import LogDisplay from './LogDisplay'

const Home = () => {
  const [userLogs, setUserLogs] = useState([])
  const { token, userId } = useContext(AuthContext)

  const getUserLogs = () => {
    axios.get(`http://localhost:4444/api/logs/${userId}`)
    .then((res) => {
      // console.log(res.data)
      setUserLogs(res.data)
    })
    .catch((err) => console.log(err))
  }

  const deleteLog = (logId) => {
    axios.delete(`http://localhost:4444/api/logs/${logId}`, {
      headers: {
        authorization: token
      }
    })
    .then(() => {
      getUserLogs()
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getUserLogs()
  }, [])

  return (
    <div>
      <LogDisplay userLogs={userLogs} key={1} deleteLog={deleteLog} />
    </div>
  )
}

export default Home