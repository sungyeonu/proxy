import React, { useState } from 'react';
import './App.css';
import WelcomePage from './pages/welcome';
import LoginPage from './pages/login';
import ScoutingPage from './pages/scouting';
import ExposuresPage from './pages/exposures';
import AddLocationsPage from './pages/addLocations';

function App() {
  // const [page, setPage] = useState('welcome');
  const [page, setPage] = useState("welcome"); // current page 
  const [name, setName] = useState(null); // name of the user

  const [exposures, setExposures] = useState({ // locations the user has been to and their dates
    "Rittenhouse Square": {
      "8/11": false,
      "8/12": false,
      "8/13": false,
    },
    "Drexel Park": {
      "8/11": false,
      "8/12": false,
      "8/13": false,
    },
    "34th Station": {
      "8/11": false,
      "8/12": false,
      "8/13": false,
    },
    "Mario Statue": {
      "8/11": false,
      "8/12": false,
      "8/13": false,
    },
  }); 

  function renderPage(param) {
    switch (param) {
      case "welcome":
        return <WelcomePage setPage={ setPage } />;
      case "login":
        return <LoginPage setName={ setName } setPage={ setPage } />;
      case "scouting":
        return <ScoutingPage exposures={ exposures } setExposures={ setExposures } setPage={ setPage } />;
      case "exposures":
        return <ExposuresPage exposures={ exposures } setPage={ setPage } />;
      case "addLocations":
        return <AddLocationsPage name={ name } setPage={ setPage }/>;
      default:
        return <WelcomePage setPage={setPage} />;;
    }
  }

  return (
    <div className="App">
      { renderPage(page) }
    </div>
  );
}

export default App;
