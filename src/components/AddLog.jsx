import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import EmotionList from './EmotionList'
import LogForm from './LogForm'
import styles from './addLog.css'
import AuthContext from '../store/authContext'
import { useNavigate } from 'react-router-dom'

const AddLog = () => {
  const [emotionList, setEmotionList] = useState([])
  const [selectedEmotions, setSelectedEmotions] = useState({})
  const [emotionValues, setEmotionValues] = useState({})
  const [notes, setNotes] = useState("")
  const [datetime, setDatetime] = useState("")
  const { token, userId } = useContext(AuthContext)
  const navigate = useNavigate()

  const getEmotions = () => {
    axios.get(`http://localhost:4444/api/emotions`, {
      headers: {
        authorization: token
      }
    })
    .then((res) => {
      setEmotionList(res.data)
    })
    .catch((err) => console.log(err))
  }

  const removeEmotion = (emotionId) => {
        delete selectedEmotions[emotionId]
        setSelectedEmotions({...selectedEmotions})
        delete emotionValues[emotionId]
        setEmotionValues({...emotionValues})
  }

  const addLog = () => {
    // console.log(emotionValues)
    axios.post(`http://localhost:4444/api/logs/${userId}`, {
      notes,
      datetime,
      emotionValues
    }, {
      headers: {
        authorization: token
      }
    })
    .then((res) => {
      console.log(res.data)
      setSelectedEmotions({})
      setEmotionValues({})
      setNotes("")
      setDatetime("")
      navigate('/home')
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getEmotions()
  }, [])

  return (
    <div className='add-log'>
      <EmotionList 
        emotionList={emotionList}
        setEmotionList={setEmotionList}
        selectedEmotions={selectedEmotions}
        setSelectedEmotions={setSelectedEmotions}
        emotionValues={emotionValues}
        setEmotionValues={setEmotionValues}
      />
      <LogForm 
        selectedEmotions={selectedEmotions}
        removeEmotion={removeEmotion}
        emotionValues={emotionValues}
        setEmotionValues={setEmotionValues}
        notes={notes}
        setNotes={setNotes}
        datetime={datetime}
        setDatetime={setDatetime}
        addLog={addLog}
      />
      </div>
  )
}

export default AddLog