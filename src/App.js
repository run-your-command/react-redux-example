import React, { createContext } from "react";
import "./App.css";
import Home from "./Screen/Home.jsx";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={{ one: "Ri ", two: "sh ", three: "u" }}>
        <LastName.Provider value={"Chowdhary"}>
          <Home />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };
