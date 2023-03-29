import { useState, useContext, useEffect } from "react";
import AuthContext from "../store/authContext";
import axios from "axios";
import LogDisplay from "./LogDisplay";
import LogSearch from "./LogSearch";

const Home = () => {
  const [userLogs, setUserLogs] = useState([]);
  const { token, userId } = useContext(AuthContext);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [displayLogs, setDisplayLogs] = useState([]);

  const matchingDateLogs = [];

  const getUserLogs = () => {
    axios
      .get(`http://localhost:4444/api/logs/${userId}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        // console.log(res.data)
        setUserLogs(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getDisplayLogs = () => {
    if (startDate || endDate) {
      userLogs.forEach((log) => {
        if (
          (startDate ? new Date(startDate).getDate() : new Date("1700-01-01").getDate()) <= new Date(log.datetime).getDate() &&
          (endDate ? new Date(endDate).getDate() + 1 : new Date("9999-01-01").getDate()) >= new Date(log.datetime).getDate()
        ) {
          matchingDateLogs.push(log);
        }
      });
      setDisplayLogs([...matchingDateLogs]);
    } else {
      setDisplayLogs([...userLogs]);
    }
  };

  useEffect(() => {
    getUserLogs();
    console.log(userLogs);
  }, []);

  useEffect(() => {
    getDisplayLogs();
    // console.log(displayLogs);
  }, [startDate, endDate, userLogs]);

  return (
    <div>
      <LogSearch
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <LogDisplay displayLogs={displayLogs} key={1} getUserLogs={getUserLogs} />
    </div>
  );
};

export default Home;
