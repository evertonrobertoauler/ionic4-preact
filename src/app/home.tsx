import { h, Component } from 'preact';
import { style, media } from 'typestyle';

const color = style({
  color: 'red'
}, media({ type: 'all', minWidth: '600px' }, {
  color: 'blue'
}));

export default class Home extends Component<any, any> {

  private alertCtrl: HTMLIonAlertControllerElement;

  showAlert = () => {
    this.alertCtrl
      .create({
        title: 'Demo',
        message: 'Loren Ipsum!',
        buttons: ['Close']
      })
      .then(alert => alert.present());
  };

  render() {
    return (
      <ion-list>
        <ion-item>
          <div className={color}>Home</div>
        </ion-item>
        <ion-item>
          <ion-button color="secondary" size="large" onClick={this.showAlert}>Show Alert</ion-button>
          <ion-alert-controller ref={(ctrl: any) => this.alertCtrl = ctrl} />
        </ion-item>
      </ion-list>
    );
  }

}
