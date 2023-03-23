import { useState, useEffect } from 'react'
import axios from 'axios'

const AddLog = () => {
  const [emotionList, setEmotionList] = useState([])
  const [selectedEmotions, setSelectedEmotions] = useState([])

  const getEmotions = () => {
    axios.get(`http://localhost:4444/api/emotions`)
    .then((res) => {
      setEmotionList(res.data)
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getEmotions()
  }, [])

  const handleSelect = (e) => {
    const newEmotion = e.target.textContent
    setSelectedEmotions([...selectedEmotions, newEmotion])
  }

  return (
    <div>
      {emotionList.map((emotion) => {
        return <div onClick={handleSelect}>{emotion.name}</div>
      })}
      <br/>
      {selectedEmotions.map((emotion) => {
        return <div>{emotion}</div>
      })}
      </div>
  )
}

export default AddLog