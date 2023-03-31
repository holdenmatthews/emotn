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
    <div className="rounded p-3 bg-green-800 text-green-50 flex flex-col items-center justify-center w-full">
      <h3 className="m-1">Search for logs within:</h3>
      <div className="flex flex-row m-1 w-full justify-center">
      <input className="m-1 rounded-full p-1 text-green-950 bg-gray-200" type="date" name="datemin" value={startDate} onChange={(e) => setMin(e)} />
      <h3 className="m-2">&</h3>
      <input className="m-1 rounded-full p-1 text-green-950 bg-gray-200" type="date" name="datemax" value={endDate} onChange={(e) => setMax(e)} />
      </div>
      <button className="p-1 px-3 bg-gray-200 hover:bg-opacity-20 bg-opacity-70 text-green-800 hover:text-green-50 transition-all duration-300 ease-in-out rounded mt-2" onClick={() => clearDates()}>Clear Dates</button>
    </div>
  );
};

export default LogSearch;
