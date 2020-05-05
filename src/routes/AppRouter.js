import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page1 from '../pages/Page1/Page1';
import Page2 from '../pages/Page2/Page2';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route component={<p>PageNot found</p>} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
