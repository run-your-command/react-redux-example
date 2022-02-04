import React, { useState } from "react";
import "./Home.css";
import "../App.js";
import { FirstName, LastName } from "../App.js";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, clearNumber } from "../lib/actions/Actions";
const icon = require("/Users/rishuchowdhary/Downloads/TRANSFER_TO_MAC/app_checking/react-redux/react-redux-example/src/assets/top_log.png");

const Home = (props) => {
  const [getName] = useState("Guest");

  // useEffect(() => {
  //   const name = prompt("Please enter your name");
  //   setName(name ? name : "Guest");
  // }, []);

  // const getFirstName = useContext(FirstName);
  // const getLasttName = useContext(LastName);

  const getState = useSelector((state) => state.actionCombined);
  const dispatch = useDispatch();

  return (
    <FirstName.Consumer>
      {(fname) => {
        return (
          <LastName.Consumer>
            {(lname) => {
              return (
                <div className="Home">
                  <header className="Home-header">
                    <div
                      style={{
                        width: 100,
                        height: 70,
                        marginTop: -200,
                        marginRight: -1300,
                      }}
                    >
                      <img
                        src={icon}
                        alt="logo"
                        style={{ backgroundColor: "red", borderRadius: 3 }}
                        // width={100}
                        // height={70}
                      />
                    </div>
                    {/* <h1 className="Home-name">
                      Hi, There {getFirstName.one}
                      {getFirstName.two}
                      {getFirstName.three}
                      {getLasttName}!
                    </h1> */}

                    <h1 className="Home-name">Hi, There {getName}!</h1>
                    <h1 className="Home-title">React-Redux-Example</h1>
                    <div className="box-conatiner">
                      <button
                        className="box-add"
                        onClick={() => {
                          //   alert("add");
                          dispatch(incNumber());
                        }}
                      >
                        +
                      </button>
                      <input
                        className="box-input"
                        value={getState}
                        onChange={() => {}}
                      />
                      <button
                        className="box-sub"
                        onClick={() => {
                          //   alert("sub");
                          dispatch(decNumber());
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div className="box-clear">
                      <button
                        className="box-clear-btn"
                        onClick={() => {
                          //   alert("sub");
                          dispatch(clearNumber());
                        }}
                      >
                        <span className="box-clear-title">Clear</span>
                        <span className="box-clear-arrow">➞</span>
                      </button>
                    </div>
                  </header>
                </div>
              );
            }}
          </LastName.Consumer>
        );
      }}
    </FirstName.Consumer>
  );
};

export default Home;
