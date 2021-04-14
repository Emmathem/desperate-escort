import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AppHeader from "./components/AppHeader";
import AppLogin from "./components/desperate_escort/AppLogin";
import AppRegister from "./components/desperate_escort/AppRegister";
import AppLandingPage from "./components/AppLandingPage";
import AppDesperate from "./components/desperate_escort/AppDesperate";

const App = () => {

  return (
    <div className="">
      <Router>
        <Switch>
            <Route exact path="/" component={AppLandingPage} />
            <Route path="/desperate-escort" component={AppDesperate} />
            <Route path="/register" component={AppRegister} />
            <Route path="/login" component={AppLogin} />
          </Switch>
      </Router>
    </div>
  );
};

export default App;
