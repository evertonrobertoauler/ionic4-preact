/// <reference path="./typings.d.ts" />

import { h, Component } from 'preact';
import * as Helmet from 'preact-helmet';
import { Router } from 'preact-router';
import Home from './home'
import Default from './default'

export class App extends Component<any, any> {

  render({ url }) {
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
              { name: "description", content: "Helmet test" }
            ]} />
            <Router url={url}>
              <Home path="/" />
              <Default default />
            </Router>
          </ion-content>
        </ion-page>
      </ion-app>
    );
  }

}
