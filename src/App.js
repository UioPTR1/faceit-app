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
            <Route path="faceit-app//lior" component={PlayerProfile} ex act />
            <Route path="faceit-app//hezi" component={PlayerProfile} exact />
            <Route path="faceit-app//ayra" component={PlayerProfile} exact />
            <Route path="faceit-app//itay" component={PlayerProfile} exact />
            <Route path="faceit-app//lavan" component={PlayerProfile} exact />
          </Suspense>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
