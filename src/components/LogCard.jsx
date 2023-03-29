import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

const LogCard = (props) => {
  const { log, getUserLogs } = props;
  const { notes, datetime, emotionValues } = log;
  const newDatetime = new Date(datetime);
  const { token, userId } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [updateNotes, setUpdateNotes] = useState(notes);
  const [updateDatetime, setUpdateDatetime] = useState(log.datetime);

  const deleteLog = (logId) => {
    axios
      .delete(`http://localhost:4444/api/logs/${logId}`, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        getUserLogs();
      })
      .catch((err) => console.log(err));
  };

  const updateLog = (logId) => {
    axios.put(
      `http://localhost:4444/api/logs/${logId}`,
      {
        updateNotes,
        updateDatetime,
        emotionValues,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };

  console.log(log)

  return (
    <div>
      {editing ? (
        <>
          <label htmlFor="datetime">When is this log for?</label>
          <br />
          <input
            type="datetime-local"
            name="datetime"
            value={updateDatetime}
            onChange={(e) => setUpdateDatetime(e.target.value)}
          />
          <br />
          {log.log_emotions.map((emotion) => {
            return (
              <>
                <h4>{emotion.emotion.name}</h4>
                <input
                  type="range"
                  name="emotionValue"
                  min="0"
                  max="10"
                  step=".1"
                  // onChange={(e) => updateValue(emotionId, e)}
                  value={emotion.emotion_value}
                />
              </>
            );
          })}
          <br />
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            value={updateNotes}
            onChange={(e) => setUpdateNotes(e.target.value)}
          />
          <br />
          <button onClick={() => updateLog()}>Update</button>
        </>
      ) : (
        <>
          <h3>{newDatetime.toLocaleString()}</h3>
          {log.log_emotions.map((emotion) => {
            return (
              <div>
                <h4>{emotion.emotion.name}</h4>
                <h4>{emotion.emotion_value}</h4>
              </div>
            );
          })}
          <p>{log.notes}</p>
          <button onClick={() => setEditing(!editing)}>Edit Log</button>
          <button onClick={() => deleteLog(log.id)}>Delete Log</button>
        </>
      )}
    </div>
  );
};

export default LogCard;
