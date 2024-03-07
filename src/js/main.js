/* eslint-disable operator-linebreak */
/* eslint-disable no-inner-declarations */

const viewportFix = (width) => {
  const meta = document.querySelector('meta[name="viewport"]');
  meta.setAttribute('content', `user-scalable=no, width=${screen.width <= width ? width : 'device-width'}`);
};

viewportFix(420);

const maskOptions = {
  mask: '+7 (000) 000-00-00',
  onFocus: function () {
    if (this.value === '') this.value = '+7 ';
  },
  onBlur: function () {
    if (this.value === '+7 ') this.value = '';
  },
};

const maskPhone = () => {
  const maskedElements = document.querySelectorAll('.masked');
  maskedElements.forEach((item) => new IMask(item, maskOptions));
};

document.addEventListener('DOMContentLoaded', function () {
  Fancybox.bind('[data-fancybox]', {
    dragToClose: false,
    autoFocus: false,
    placeFocusBack: false,
  });

  const faq = document.querySelector('.faq');
  if (faq) {
    faq.addEventListener('click', (e) => {
      if (e.target.classList.contains('faq-title')) {
        const item = e.target.closest('.faq-item');
        if (item) {
          item.classList.toggle('active');
          [...faq.querySelectorAll('.faq-item')].forEach((el) => {
            if (el !== item) el.classList.remove('active');
          });
        }
      }
    });
  }

  const contacts = document.querySelector('.contacts-more');
  if (contacts) {
    const tabs = document.querySelectorAll('.contacts-tabs li');
    tabs.forEach((tab) => {
      const id = tab.getAttribute('data-tab');
      tab.addEventListener('click', () => {
        [...tabs].forEach((el) => {
          el.classList.remove('active');
        });
        tab.classList.add('active');

        [...contacts.querySelectorAll('.contacts-tab')].forEach((el) => {
          el.classList.remove('active');
        });
        document.querySelector(`.contacts-tab[data-tab="${id}"]`).classList.add('active');
      });
    });
  }

  const reviews = new Splide('.specialists-reviews__slider', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    arrows: false,
    pagination: false,
  }).mount();

  document.querySelector('.specialists-reviews__prev').addEventListener('click', () => reviews.go('<'));
  document.querySelector('.specialists-reviews__next').addEventListener('click', () => reviews.go('>'));
});
