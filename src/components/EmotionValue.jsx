import React from "react";

const EmotionValue = (props) => {
  const {
    emotionId,
    emotionName,
    removeEmotion,
    emotionValues,
    setEmotionValues,
  } = props;
  const emotionValsObj = { ...emotionValues };
  const updateValue = (emotionId, e) => {
    emotionValsObj[emotionId] = e.target.value;
    setEmotionValues({ ...emotionValsObj });
  };

  return (
    <div>
      <h3>{emotionName}</h3>
      <br />
      <label htmlFor="emotionValue">Value:</label>
      <input
        type="range"
        name="emotionValue"
        min="0"
        max="10"
        step=".1"
        onChange={(e) => updateValue(emotionId, e)}
        value={emotionValues[emotionId]}
      />
      <button onClick={() => removeEmotion(emotionId)}>X</button>
    </div>
  );
};

export default EmotionValue;
