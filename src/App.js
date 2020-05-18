import "./App.css";
import Home from "./views/Home";
import React, { Suspense, lazy } from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const PlayerProfile = lazy(() => import("./views/PlayerProfile"));

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/faceit-app/" component={Home} exact />
          <Suspense fallback={<div>טוען...</div>}>
            <Route path="/faceit-app/:name" component={PlayerProfile} exact />
          </Suspense>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
