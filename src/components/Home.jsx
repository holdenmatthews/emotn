import { useState, useContext, useEffect } from 'react'
import AuthContext from '../store/authContext'
import axios from 'axios'
import LogDisplay from './LogDisplay'
import LogSearch from './LogSearch'

const Home = () => {
  const [userLogs, setUserLogs] = useState([])
  const { token, userId } = useContext(AuthContext)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const getUserLogs = () => {
    axios.get(`http://localhost:4444/api/logs/${userId}`, {
      headers: {
        authorization: token
      }
    })
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
      <LogSearch startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
      <LogDisplay userLogs={userLogs} key={1} deleteLog={deleteLog} />
    </div>
  )
}

export default Home