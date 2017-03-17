import ContactFormView from '../view/contact-form';
import ContactListView from '../view/contact-list';
import { findAll } from '../actions';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.ContactFormView = new ContactFormView(this.el.querySelector('.contact-form'), this.store);
    this.ContactListView = new ContactListView(this.el.querySelector('.grid'), this.store);
  }

  created() {
    // Set up listen for state change and store in local storage
    this.store.subscribe(() => {
      window.localStorage.contacts = JSON.stringify(this.store.getState().contacts);
    });

    this.ContactFormView.mounted();
    this.ContactListView.mounted();


    // Figure out old data
    this.store.dispatch({
      type: 'CONTACT@FIND_ALL',
      data: JSON.parse(localStorage.contacts || '[]')
    });
  }
}
