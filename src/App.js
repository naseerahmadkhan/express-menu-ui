// import './App.css';
import React from 'react';
import NavBar from "./Components/NavBarExpressMenu/NavBarExpressMenu"
import Routes from "./Routes/RoutesList"
import { Accounts } from "./Auth/Accounts";

let data = {  }
export const AppContext = React.createContext(data);


function App() {
  return (
    <div className="App">
     <Accounts>
    <AppContext.Provider value={data}>
    <Routes/>
    </AppContext.Provider>
    </Accounts>
    </div>
  );
}

export default App;
