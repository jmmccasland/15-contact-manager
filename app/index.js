import 'whatwg-fetch';
import store from './store';
import AppController from './app';

const appEl = new App(document.querySelector('.app'));
const app = new AppController(appEl, store);

app.created();
