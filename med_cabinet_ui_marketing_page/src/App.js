import React from "react";

import "./style.css";
import content from "./sourceContent";
import Home from "./Views/Home";
import UI_NAV from "./Components/UI_NAV";
import UI_DISP_JOIN from "./Components/UI_DISP_JOIN";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InfoPage from "./Views/InfoPage";

function App() {
  // Used to call color changes in other components
  const colorPrimary = "#247ea7";
  const colorSecondary = "#09921d";

  return (
    <Router>
      <div className="App">
        {/* Nav Top Bar */}
        <UI_NAV primary={colorPrimary} />
        <Switch>
          <Route exact path="/">
            <Home
              content={content}
              colorPrimary={colorPrimary}
              colorSecondary={colorSecondary}
            />
          </Route>
          <Route path="/symptom-filter">
            <InfoPage content={content.infoItemOne} />
          </Route>
          <Route path="/strain-finder">
            <InfoPage content={content.infoItemTwo} />
          </Route>
          <Route path="/dose-tracker">
            <InfoPage content={content.infoItemThree} />
          </Route>
        </Switch>

        {/* Join Footer */}
        <UI_DISP_JOIN
          colorPrimary={colorPrimary}
          colorSecondary={colorSecondary}
        />
      </div>
    </Router>
  );
}

export default App;
