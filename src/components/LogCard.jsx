import React from 'react'

const LogCard = (props) => {
  const { log, deleteLog } = props
  const { datetime } = log
  const newDatetime = new Date(datetime)

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