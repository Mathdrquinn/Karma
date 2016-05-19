import angular from 'angular';
import mocks from 'angular-mocks';

import * as app from './app/index';

let context = require.context('./app', true, /\.spec\.js/);
context.keys().forEach(context);