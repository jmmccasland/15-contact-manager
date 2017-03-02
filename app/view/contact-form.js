export default class ContactFormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.el.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const data = {
        // Lookup input values here
        firstName: this.el.querySelector('.contact-form__firstname').value,
        lastName: this.el.querySelector('.contact-form__lastname').value,
        street: this.el.querySelector('.contact-form__street').value,
        city: this.el.querySelector('.contact-form__city').value,
        state: this.el.querySelector('.contact-form__state').value,
      };

      this.store.dispatch({ type: 'CONTACT@CREATE', data });
    });
  }
}
