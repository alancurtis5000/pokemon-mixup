import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page1 from '../pages/Page1/Page1';
import Page2 from '../pages/Page2/Page2';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Landing from '../pages/Landing/Landing';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/Page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
