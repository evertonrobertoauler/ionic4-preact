/// <reference path="./typings.d.ts" />

import { h, Component } from 'preact';
import { style, media } from 'typestyle';
import * as Helmet from 'preact-helmet';
import { Router, Link } from 'preact-router';

const teste = style({
  textAlign: 'center'
}, media({ type: 'all', minWidth: '600px' }, {
  textAlign: 'right'
}));

export class App extends Component<any, any> {

  private alert: HTMLIonAlertControllerElement;

  componentDidMount() {
    setTimeout(() => this.alert.create({
      title: 'Warning',
      message: 'Loren Ipsun',
      buttons: ['Close']
    }).then(a => a.present()), 300);
  }

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
            <div>
              <Helmet title="My Title" meta={[
                { name: "description", content: "Helmet test" },
                { property: "og:type", content: "article" }
              ]} />
              <Router url={url}>
                <div path='/'>Home</div>
                <div default>
                  <p>Página não encontrada!</p>
                  <Link href="/">Home</Link>
                </div>
              </Router>
            </div>
            <ion-alert-controller ref={(d: any) => this.alert = d}></ion-alert-controller>
          </ion-content>
        </ion-page>
      </ion-app>
    );
  }

}
