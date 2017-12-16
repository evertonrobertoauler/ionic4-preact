import { h, render } from 'preact';
import { App } from './app';
import { setStylesTarget } from "typestyle";

const root = document.getElementById('root');
render(<App />, root, root.children[0]);
setStylesTarget(document.getElementById('styles-root'));
