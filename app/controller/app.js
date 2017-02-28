export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  created() {
    // Set up listen for state change and store in local storage
    this.store.subscribe(() => {
      localStorage.contacts = JSON.stringify(this.store.getState().contacts);
    });

    // Figure out old data
    this.store.dispatch({
      type: 'CONTACT@FIND_ALL',
      data: JSON.parse(localStorage.contacts || '[]')
    });

  }
}
