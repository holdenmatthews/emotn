import { useContext } from 'react'
import axios from 'axios'
import AuthContext from "../store/authContext";

const LogCard = (props) => {
  const { log, getUserLogs } = props
  const { datetime } = log
  const newDatetime = new Date(datetime)
  const { token, userId } = useContext(AuthContext);

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

  return (
    <div>
      <h3>{newDatetime.toLocaleString()}</h3>
      {log.log_emotions.map((emotion) => {
        return (<div>
          <h4>{emotion.emotion.name}</h4>
          <h4>{emotion.emotion_value}</h4>
        </div>)
      })}
      <p>{log.notes}</p>
      <button onClick={() => deleteLog(log.id)}>Delete Log</button>
    </div>
  )
}

export default LogCard