import React from "react";

const LogSearch = (props) => {
    const { startDate, setStartDate, endDate, setEndDate } = props

    const setMin = (e) => {
        setStartDate(e.target.value)
        // console.log(startDate)    
    }

    const setMax = (e) => {
        setEndDate(e.target.value)
        // console.log(endDate)
    }

    const clearDates = () => {
      setStartDate("")
      setEndDate("")
    }

  return (
    <div className="border-2 rounded p-3 border-green-800">
      <h3>Search for logs within a range of dates(included):</h3>
      <label htmlFor="datemin">Range Start</label>
      <input type="date" name="datemin" value={startDate} onChange={(e) => setMin(e)} />
      <label htmlFor="datemax">Range End</label>
      <input type="date" name="datemax" value={endDate} onChange={(e) => setMax(e)} />
      <button onClick={() => clearDates()}>Clear Dates</button>
    </div>
  );
};

export default LogSearch;
