import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/authContext";

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <header>
      <nav>
        {authCtx.token ? (
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/new-log">Add Log</NavLink>
            </li>
            <li>
              <button onClick={() => authCtx.logout()}>Logout</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to="/">Auth</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
