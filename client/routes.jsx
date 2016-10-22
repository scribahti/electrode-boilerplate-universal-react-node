import React from "react";
import {Route, IndexRoute} from "react-router";
import Home from "./home/component";
import SSRCachingTemplateType from "./templateCache/container";
import SSRCachingSimpleType from "./simpleCache/container";
import {CSRF} from "./csrf/component";
import AboveFold from "./atf/component";
import FuelSavingsPage  from './fuelsavings/container';

export const routes = (
  <Route path="/">
    <IndexRoute component={Home}/>
    <Route path="ssrcachingtemplatetype" component={SSRCachingTemplateType}/>
    <Route path="ssrcachingsimpletype" component={SSRCachingSimpleType}/>
    <Route path="csrf" component={CSRF}/>
    <Route path="above-the-fold" component={AboveFold}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
  </Route>
);
