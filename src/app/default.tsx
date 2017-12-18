import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Default extends Component<any, any> {

  render() {
    return (
      <ion-list>
        <ion-item>
          Page not Found!
        </ion-item>
        <ion-item>
          <Link href="/">Back to Home</Link>
        </ion-item>
      </ion-list>
    );
  }

}
