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

  render({ url }) {
    return (
      <div className={teste}>
        <p>Hello World!</p>
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
    );
  }

}
