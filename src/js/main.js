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
  new isvek.Bvi();

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

  if (document.querySelector('.specialists-reviews')) {
    const reviews = new Splide('.specialists-reviews__slider', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      arrows: false,
      pagination: false,
      breakpoints: {
        1024: {
          perPage: 2,
        },
        576: {
          perPage: 1,
        },
      },
    }).mount();

    document.querySelector('.specialists-reviews__prev').addEventListener('click', () => reviews.go('<'));
    document.querySelector('.specialists-reviews__next').addEventListener('click', () => reviews.go('>'));
  }

  const legal = document.querySelector('.legal');
  if (legal) {
    const btnWrap = legal.querySelector('.legal-btn');
    const btn = btnWrap.querySelector('.btn');
    const itemsList = legal.querySelector('.legal-list');

    btn.addEventListener('click', () => {
      itemsList.classList.add('show');
      btnWrap.classList.add('hide');
    });
  }

  if (document.querySelector('.gratitude')) {
    const gratitude = new Splide('.gratitude-slider', {
      type: 'loop',
      perPage: 5,
      perMove: 1,
      arrows: false,
      pagination: false,
      gap: '40px',
      breakpoints: {
        1024: {
          perPage: 4,
        },
        768: {
          perPage: 3,
        },
        576: {
          perPage: 2,
          gap: '20px',
        },
      },
    }).mount();

    document.querySelector('.gratitude-prev').addEventListener('click', () => gratitude.go('<'));
    document.querySelector('.gratitude-next').addEventListener('click', () => gratitude.go('>'));
  }

  if (document.querySelector('.stock')) {
    const stock = new Splide('.stock-slider', {
      type: 'loop',
      arrows: false,
      gap: '160px',
      breakpoints: {
        1024: {
          gap: '15px',
        },
      },
    }).mount();

    document.querySelector('.stock-prev').addEventListener('click', () => stock.go('<'));
    document.querySelector('.stock-next').addEventListener('click', () => stock.go('>'));
  }
});
