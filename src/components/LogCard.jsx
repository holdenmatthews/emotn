import React from 'react'

const LogCard = (props) => {
  const { log } = props

  console.log(log)

  return (
    <div>
      <h3>{log.datetime}</h3>
      {log.log_emotions.map((emotion) => {
        return (<div>
          <h4>{emotion.emotion.name}</h4>
          <h4>{emotion.emotion_value}</h4>
        </div>)
      })}
      <p>{log.notes}</p>
    </div>
  )
}

export default LogCard