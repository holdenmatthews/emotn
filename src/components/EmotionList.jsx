import React from 'react'

const EmotionList = (props) => {
    const { emotionList, selectedEmotions, setSelectedEmotions, emotionValues, setEmotionValues } = props

    const handleSelect = (e) => {
        const newEmotionId = e.target.id
        const newEmotionName = e.target.textContent
        if (!selectedEmotions.includes(newEmotionName)) {
        setSelectedEmotions([...selectedEmotions, newEmotionName])
        setEmotionValues({...emotionValues, [newEmotionId]: 0})
        }
      }

  return (
    <div>{emotionList.map((emotion) => {
        return <div onClick={handleSelect} key={emotion.id} id={emotion.id}>{emotion.name}</div>
      })}</div>
  )
}

export default EmotionList