import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

const LogCard = (props) => {
  const { log, getUserLogs } = props;
  const { notes, datetime} = log;
  const { token } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [newNotes, setNewNotes] = useState(notes);

  const newDatetime = new Date(datetime);

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

  const editNotes = (logId) => {
    axios.put(
      `http://localhost:4444/api/logs/${logId}`,
      {
        newNotes
      },
      {
        headers: {
          authorization: token,
        }
      })
      .then(() => {
        getUserLogs()
      })
      .catch((err) => console.log(err))
  };

  return (
    <div>
      {editing ? (
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
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
          />
          <br />
          <button onClick={() => editNotes()}>Update</button>
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
          <button onClick={() => setEditing(!editing)}>Edit Notes</button>
          <button onClick={() => deleteLog(log.id)}>Delete Log</button>
        </>
      )}
    </div>
  );
};

export default LogCard;
