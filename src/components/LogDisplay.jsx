import React from "react";
import LogCard from "./LogCard";

const LogDisplay = (props) => {
  const { displayLogs, getUserLogs } = props;
  // console.log(userLogs)
  if (displayLogs.length === 0) {
    return (
      <h3 className="text-center text-green-950 p-2 rounded bg-green-800 bg-opacity-10">
        No logs match your date search. Please try again with a new date range.
      </h3>
    );
  } else {
    return (
      <div>
        {displayLogs
          .sort(
            (a, b) =>
              new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
          )
          .reverse()
          .map((log) => (
            <LogCard log={log} key={log.id} getUserLogs={getUserLogs} />
          ))}
      </div>
    );
  }
};
export default LogDisplay;
