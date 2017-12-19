import * as React from 'react';
import { style, media } from 'typestyle';

const color = style({
  color: 'red'
}, media({ type: 'all', minWidth: '600px' }, {
  color: 'blue'
}));

export default class Home extends React.Component<any, any> {

  private alertCtrl: HTMLIonAlertControllerElement;

  componentWillMount() {
    this.setState(state => ({ ...state, name: 'Lorem Ipsum!', lines: [1] }));
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(state => state.lines.length > 4 ? ({ ...state, lines: [] }) : ({ ...state, lines: state.lines.concat([state.lines.length + 1]) }));
    }, 1000);
  }

  formUpdate = (event) => {
    const name = event.target.value;
    this.setState(state => ({ ...state, name }));
  };

  showAlert = () => {
    this.alertCtrl
      .create({
        title: 'Demo',
        message: 'Lorem Ipsum!',
        buttons: ['Close']
      })
      .then(alert => alert.present());
  };

  render() {
    return (
      <ion-list>
        <ion-item>
          <div className={color}>Home - {this.state.name}</div>
        </ion-item>
        <ion-item>
          <ion-button color="secondary" size="large" onClick={this.showAlert}>Show Alert</ion-button>
          <ion-alert-controller ref={(ctrl: any) => this.alertCtrl = ctrl} />
        </ion-item>
        <ion-item>
          <ion-input type="text" value={this.state.name} onInput={this.formUpdate} />
        </ion-item>
        {this.state.lines.map((i) => <ion-item key={i}>{i}</ion-item>)}
      </ion-list>
    );
  }

}
