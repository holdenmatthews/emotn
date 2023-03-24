import React from 'react'

const EmotionValue = (props) => {
    const { emotion, removeEmotion, emotionValues, setEmotionValues, i } = props
    const emotionValsObj = {...emotionValues}

    const updateValue = (emotion, e) => {
        emotionValsObj[emotion] = e.target.value
        setEmotionValues({...emotionValsObj})
    }

  return (
    <div>
            {emotion}
            <br/>
            <label htmlFor="emotionValue">Value:</label>
            <input 
                type="range" 
                name="emotionValue" 
                min="0" max="10" 
                step=".1" 
                onChange={(e) => updateValue(emotion, e)} 
                value={emotionValues[emotion]}/>
            <button onClick={() => removeEmotion(emotion, i)}>X</button>
        </div>
  )
}

export default EmotionValue