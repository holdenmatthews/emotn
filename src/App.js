import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/authContext";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Auth from "./components/Auth";
import AddLog from "./components/AddLog";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={!authCtx.token ? <Auth /> : <Navigate to="/home" />}
          // element={<Auth />}
        />
        <Route
          path="/home"
          element={authCtx.token ? <Home /> : <Navigate to="/" />}
          // element={<Home />}
        />
        <Route
          path="/new-log"
          element={authCtx.token ? <AddLog /> : <Navigate to="/" />}
          // element={<AddLog />}
        />
      </Routes>
    </div>
  );
  }

export default App;
