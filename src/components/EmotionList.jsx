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
    <div className='shadow-xl flex flex-col items-center mt-2 lg:mt-4 p-2 bg-green-800 bg-opacity-10 rounded'>
      <h3 className='text-green-950 text-center m-2 mx-4'>Click an emotion below to add it to your log!</h3>
      {emotionList.map((emotion) => {
        return <div className='shadow-md hover:shadow-lg w-36 m-1 bg-green-800 bg-opacity-10 text-green-950 rounded-full p-1 px-2 text-center hover:bg-opacity-90 hover:text-green-50 transition-all duration-300 ease-in-out' onClick={handleSelect} key={emotion.id} id={emotion.id}>{emotion.name}</div>
      })}</div>
  )
}

export default EmotionList