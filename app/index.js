import 'whatwg-fetch';
import store from './store';
import AppController from './app';

const app = new App(document.querySelector('.app'));

app.created();
