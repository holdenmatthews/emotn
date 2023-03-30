import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";
import { BsFillTrash3Fill } from "react-icons/bs";

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
        setEditing(false)
        getUserLogs()
      })
      .catch((err) => console.log(err))
  };

  const splitDatetime = (datetime) => {
    const str = datetime.toLocaleString()
    const [date, time] = str.split(", ")
    const [shortTime, ampm] = time.split(":00 ")
  
    return (<div className="rounded bg-gray-200 p-1 flex flex-col items-center">
      <h3 className="bg-green-800 text-green-50 px-1 rounded-full">{date}</h3>
      <h3 className="text-green-900">{shortTime + " " + ampm}</h3>
    </div>)
  }

  return (
    <div className="bg-green-800 bg-opacity-10 m-2 rounded flex flex-col items-center p-2">
      {editing ? (
        <>
          <div>
            <>{splitDatetime(newDatetime)}</>
          </div>
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
          <button onClick={() => editNotes(log.id)}>Update</button>
        </>
      ) : (
        <>
          <div className="flex flex-row content-between w-full">
            <>{splitDatetime(newDatetime)}</>
            <div></div>
          </div>
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
          <div className="flex flex-row justify-between w-full">
          <div></div>
          <button onClick={() => deleteLog(log.id)} className="p-1 px-3 bg-green-800 bg-opacity-20 hover:bg-opacity-70 hover:text-green-50 transition-all duration-300 ease-in-out rounded">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default LogCard;
