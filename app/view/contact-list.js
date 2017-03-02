class ItemView {
  constructor(contact, store) {
    this.contact = contact;
    this.store = store;

    this.el = document.createElement('div');
    this.el.classList.add('card');
    this.el.innerHTML = `
    <div class="card-info">
      <h2 class="card-info__full-name"></h2>
      <p class="card-info__street">123 Drury Lane</p>
      <p><span class="card-info__city">City</span>, <span class="card-info__state">State</span></p>
    </div><!-- /.card-info -->

    <div class="action-bar">
      <button class="button card__delete">Delete</button>
    </div><!-- /.action-bar -->`;
  }


  // might need to change values of innerText
  render() {
    this.el.querySelector('.card-info__full-name').innerText = `${this.contact.firstName} ${this.contact.lastName}`;
    this.el.querySelector('.card-info__street').innerText = this.contact.street;
    this.el.querySelector('.card-info__city').innerText = this.contact.city;
    this.el.querySelector('.card-info__state').innerText = this.contact.state;
  }
}



export default class ContactListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = "";
    const contacts = this.store.getState().contacts;
    contacts.forEach((contact) => {
      const view = new ItemView(contact, this.store);
      view.render();

      this.el.appendChild(view.el);
    });
  }
}
