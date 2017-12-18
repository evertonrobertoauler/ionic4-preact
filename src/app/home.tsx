import { h, Component } from 'preact';
import { style, media } from 'typestyle';

const color = style({
  color: 'red'
}, media({ type: 'all', minWidth: '600px' }, {
  color: 'blue'
}));

export default class Home extends Component<any, any> {

  private alertCtrl: HTMLIonAlertControllerElement;

  formUpdate(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    }
  }

  showAlert = () => {
    this.alertCtrl
      .create({
        title: 'Demo',
        message: 'Lorem Ipsum!',
        buttons: ['Close']
      })
      .then(alert => alert.present());
  };

  render({ }, { name }) {
    return (
      <ion-list>
        <ion-item>
          <div className={color}>Home</div>
        </ion-item>
        <ion-item>
          <ion-button color="secondary" size="large" onClick={this.showAlert}>Show Alert</ion-button>
          <ion-alert-controller ref={(ctrl: any) => this.alertCtrl = ctrl} />
        </ion-item>
        <ion-item>
          <ion-input type="text" value={name} onInput={this.formUpdate('name')} />
        </ion-item>
      </ion-list>
    );
  }

}
