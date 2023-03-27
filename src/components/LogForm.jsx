import React from "react";
import EmotionValue from "./EmotionValue";

const LogForm = (props) => {
  const {
    selectedEmotions,
    removeEmotion,
    emotionValues,
    setEmotionValues,
    notes,
    setNotes,
    datetime,
    setDatetime,
    addLog,
  } = props;

  return (
    <div>
      <label htmlFor="datetime">When is this log for?</label>
      <br />
      <input
        type="datetime-local"
        name="datetime"
        value={datetime}
        onChange={(e) => setDatetime(e.target.value)}
      />
      <br />
      {Object.keys(selectedEmotions).map((key) => {
        return (
          <EmotionValue
            emotionId={key}
            emotionName={selectedEmotions[key]}
            removeEmotion={removeEmotion}
            emotionValues={emotionValues}
            setEmotionValues={setEmotionValues}
            key={key}
          />
        );
      })}
      <br />
      <label htmlFor="notes">Notes</label>
      <textarea
        name="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <br />
      <button onClick={() => addLog()}>Submit</button>
    </div>
  );
};

export default LogForm;
