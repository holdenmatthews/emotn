import React from 'react'

const EmotionList = (props) => {
    const { emotionList, selectedEmotions, setSelectedEmotions, emotionValues, setEmotionValues } = props

    const handleSelect = (e) => {
        const newEmotionId = e.target.id
        const newEmotionName = e.target.textContent
        if (!selectedEmotions.newEmotionId) {
        setSelectedEmotions({...selectedEmotions, [newEmotionId]: newEmotionName})
        setEmotionValues({...emotionValues, [newEmotionId]: 0})
        }
        console.log(selectedEmotions, emotionValues)
      }

  return (
    <div>
      {emotionList.map((emotion) => {
        return <div className='m-1 bg-green-800 bg-opacity-10 text-green-950 rounded-full p-1 px-2 text-center hover:bg-opacity-90 hover:text-green-50 transition-all duration-300 ease-in-out' onClick={handleSelect} key={emotion.id} id={emotion.id}>{emotion.name}</div>
      })}</div>
  )
}

export default EmotionList