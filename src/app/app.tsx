/// <reference path="./typings.d.ts" />

import * as React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import Home from './home'
import Default from './default'

export class App extends React.Component<any, any> {
  render() {
    return (
      <ion-app>
        <ion-page>
          <ion-header>
            <ion-toolbar color="primary">
              <ion-title>
                Hello World!
              </ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <Helmet title="My Title" meta={[
              { name: "description", content: 'Helmet test' }
            ]} />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='*' component={Default} />
            </Switch>
          </ion-content>
        </ion-page>
      </ion-app>
    );
  }

}
