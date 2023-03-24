import { useState, useEffect } from 'react'
import axios from 'axios'
import EmotionList from './EmotionList'
import LogForm from './LogForm'
import styles from './addLog.css'

const AddLog = () => {
  const [emotionList, setEmotionList] = useState([])
  const [selectedEmotions, setSelectedEmotions] = useState([])
  const [emotionValues, setEmotionValues] = useState({})

  const getEmotions = () => {
    axios.get(`http://localhost:4444/api/emotions`)
    .then((res) => {
      setEmotionList(res.data)
    })
    .catch((err) => console.log(err))
  }

  const removeEmotion = (emotion, i) => {
        selectedEmotions.splice(i, 1)
        setSelectedEmotions([...selectedEmotions])
        delete emotionValues[emotion]
        setEmotionValues({...emotionValues})
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
      />
      </div>
  )
}

export default AddLog