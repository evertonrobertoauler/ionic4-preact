import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { setStylesTarget } from 'typestyle';
import { App } from './app';

import '../../node_modules/@ionic/core/dist/ionic';

const root = document.getElementById('root');
hydrate(<BrowserRouter><App /></BrowserRouter>, root);
setStylesTarget(document.getElementById('styles-root'));
