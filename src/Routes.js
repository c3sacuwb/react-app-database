import React from 'react';
import { Switch, Route } from 'react-router';
import NoMatch from './NoMatch';
import Page from './Page';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Page} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
