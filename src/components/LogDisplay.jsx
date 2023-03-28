import React from 'react'
import LogCard from './LogCard'

const LogDisplay = (props) => {
  const { userLogs } = props
  return (
    <div>
      {userLogs.map((log) => {
        return <LogCard log={log}/>
      })}
    </div>
  )
}

export default LogDisplay