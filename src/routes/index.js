import React from 'react';

import { Home, Experiment, History, SensorPage} from '../pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Routes = () => {
  return(
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/experiment" exact component={Experiment} />
          <Route path="/history" exact component={History} />
          <Route path="/sensors" exact component={SensorPage} />
        </Switch>
      </Router>
  );
}

export default Routes;