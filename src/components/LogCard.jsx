import React from 'react'
import axios from 'axios'

const LogCard = (props) => {
  const { log } = props
  const { datetime } = log
  const newDatetime = new Date(datetime)

  const deleteLog = () => {
    axios.delete(``)
  }

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
      <button>Delete Log</button>
    </div>
  )
}

export default LogCard