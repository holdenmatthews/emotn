import React from "react";
import EmotionValue from "./EmotionValue";
import { BsCheckCircle, BsStickyFill } from "react-icons/bs";

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
    <div className="w-full bg-gray-200 fixed flex justify-center p-4">
    <div className="p-1 flex flex-col items-center bg-green-800 rounded w-11/12 text-green-50">
      <label className="m-1" htmlFor="datetime">When is this log for?</label>
      <input
      className="m-1 rounded-full p-1 text-green-950 bg-gray-200"
        type="datetime-local"
        name="datetime"
        value={datetime}
        onChange={(e) => setDatetime(e.target.value)}
      />
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
      <label className="flex flex-row items-center gap-2" htmlFor="notes"><BsStickyFill />Notes</label>
      <textarea
        className="m-1 bg-gray-200 rounded text-green-950 p-2"
        name="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button className="p-1 m-1 px-3 bg-gray-200 bg-opacity-70 hover:bg-opacity-30 text-green-950 hover:text-green-50 transition-all duration-300 ease-in-out rounded mt-1 flex flex-row gap-2 items-center" onClick={() => addLog()}><BsCheckCircle />Submit</button>
    </div>
    </div>
  );
};

export default LogForm;
