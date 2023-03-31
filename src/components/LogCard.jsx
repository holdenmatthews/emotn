import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";
import { BsFillTrash3Fill, BsFillPencilFill, BsCheckCircle } from "react-icons/bs";

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
          <div className="flex flex-row content-between w-full">
            <>{splitDatetime(newDatetime)}</>
            <div></div>
          </div>
          <div className="m-1 flex flex-row flex-wrap justify-center">
          {log.log_emotions.map((emotion) => {
            return (
              <div className="m-2 flex flex-col items-center bg-green-800 bg-opacity-20 p-2 rounded text-green-950 w-32">
                <h4 className="mb-1">{emotion.emotion.name}</h4>
                <h4 className="w-8 p-1 bg-green-800 text-green-50 rounded-full text-center">{emotion.emotion_value}</h4>
              </div>
            );
          })}
          </div>
          <textarea
            className="bg-gray-200 w-full rounded text-green-950 mb-1 p-2 border-solid border-2 border-green-800"
            name="notes"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
          />
          <button className="p-1 px-3 bg-green-800 bg-opacity-20 hover:bg-opacity-70 text-green-950 hover:text-green-50 transition-all duration-300 ease-in-out rounded mt-1" onClick={() => editNotes(log.id)}>
            <BsCheckCircle />
          </button>
        </>
      ) : (
        <>
          <div className="m-1 flex flex-row content-between w-full">
            <>{splitDatetime(newDatetime)}</>
            <div></div>
          </div>
          <div className="m-1 flex flex-row flex-wrap justify-center">
          {log.log_emotions.map((emotion) => {
            return (
              <div className="m-1 flex flex-col items-center bg-green-800 bg-opacity-20 p-2 rounded text-green-950 w-32">
                <h4 className="mb-1">{emotion.emotion.name}</h4>
                <h4 className="w-8 p-1 bg-green-800 text-green-50 rounded-full text-center">{emotion.emotion_value}</h4>
              </div>
            );
          })}
          </div>
          <div className="bg-gray-200 p-2 rounded flex flex-col items-start m-1 w-full">
          <div className="mb-1 text-green-950">{log.notes}</div>
          <button onClick={() => setEditing(!editing)} className="p-1 px-3 bg-green-800 bg-opacity-20 hover:bg-opacity-70 text-green-950 hover:text-green-50 transition-all duration-300 ease-in-out rounded">
            <BsFillPencilFill />
          </button>
          </div>
          <div className="flex flex-row justify-between w-full">
          <div></div>
          <button onClick={() => deleteLog(log.id)} className="p-1 m-1 px-3 bg-green-800 bg-opacity-20 hover:bg-opacity-70 text-green-950 hover:text-green-50 transition-all duration-300 ease-in-out rounded">
            <BsFillTrash3Fill />
          </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LogCard;
