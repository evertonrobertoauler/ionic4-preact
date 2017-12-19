import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Default extends React.Component<any, any> {

  render() {
    return (
      <ion-list>
        <ion-item>
          Page not Found!
        </ion-item>
        <ion-item>
          <Link to="/">Back to Home</Link>
        </ion-item>
      </ion-list>
    );
  }

}
