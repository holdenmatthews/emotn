import React from "react";
import { BsXSquare } from "react-icons/bs";

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
    <div className="bg-gray-200 m-1 rounded">
    <div className="bg-green-800 bg-opacity-20 p-2 rounded flex flex-col items-center">
      <h3 className="text-green-950 mb-1">{emotionName}</h3>
      <div className="flex flex-row justify-between">
      <input
        className="m-1"
        type="range"
        name="emotionValue"
        min="0"
        max="10"
        step=".1"
        onChange={(e) => updateValue(emotionId, e)}
        value={emotionValues[emotionId]}
      />
      <button className="bg-green-800 rounded p-1 transition-all duration-300 ease-in-out hover:bg-opacity-30 hover:text-green-950" onClick={() => removeEmotion(emotionId)}><BsXSquare /></button>
    </div>
    </div>
    </div>
  );
};

export default EmotionValue;
