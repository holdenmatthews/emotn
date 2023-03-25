import React from "react";
import EmotionValue from "./EmotionValue";

const LogForm = (props) => {
  const { selectedEmotions, removeEmotion, emotionValues, setEmotionValues, notes, setNotes, datetime, setDatetime } = props;

  return (
    <div>
      <label htmlFor="datetime">When is this log for?</label>
      <br />
      <input type="datetime-local" name="datetime" value={datetime} onChange={(e) => setDatetime(e.target.value)}/>
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
      <textarea name="notes" value={notes} onChange={(e) => setNotes(e.target.value)}/>
      <br/>
      <button>Submit</button>
    </div>
  );
};

export default LogForm;
