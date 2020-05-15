import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page1 from '../pages/Page1/Page1';
import Page2 from '../pages/Page2/Page2';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Landing from '../pages/Landing/Landing';
import StyleGuide from '../pages/StyleGuide/StyleGuide';
import AspectRatio from '../pages/AspectRatio/AspectRatio';
import Game from '../pages/Game/Game';
import Header from '../components/Header/Header';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/:Game" component={Game} />
      <Route path="/AspectRatio" component={AspectRatio} />
      <Route path="/Styles" component={StyleGuide} />
      <Route path="/Landing" component={Landing} />
      <Route path="/Page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
