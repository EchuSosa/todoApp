import React from "react";
import { Route, Router, BrowserRouter, Switch } from "react-router-dom";

import history from "./routes/history";
import routes from "./routes/routes";

import Home from "./components/views/home";
import NotFound from "./components/views/not-found";

const App = () => {
  return (
      <Router history={history}>
        <BrowserRouter>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
      </Router>
  );
};

export default App;
