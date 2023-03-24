import React from "react";
import EmotionValue from "./EmotionValue";

const LogForm = (props) => {
  const { selectedEmotions, removeEmotion, emotionValues, setEmotionValues } = props;

  return (
    <div>
      <label htmlFor="datetime">When is this log for?</label>
      <br />
      <input type="datetime-local" name="datetime" />
      <br />
      {selectedEmotions.map((emotion, i) => {
        return (
          <EmotionValue
            emotion={emotion}
            removeEmotion={removeEmotion}
            emotionValues={emotionValues}
            setEmotionValues={setEmotionValues}
            key={emotion}
            i={i}
          />
        );
      })}
      <br />
      <label htmlFor="notes">Notes</label>
      <textarea name="notes" />
    </div>
  );
};

export default LogForm;
