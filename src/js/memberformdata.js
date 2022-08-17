// console.log('xsaxsa');
import sendData from './sendData';

const refs = {
  name: document.querySelector('#name'),
  tel: document.querySelector('#tel'),
  service: document.querySelector('#service'),
  comment: document.querySelector('#comment'),
};
const dataToCrm = {};

const send = document.querySelector('.form__btn');
// console.log('object', send);
send.addEventListener('click', sendDataf);

const serviceBtns = document.querySelectorAll('.services__btn');
//записываю данные в форму относительно нажатой кнопки
for (const iterator of serviceBtns) {
  iterator.addEventListener('click', e => {
    refs.service.value = e.currentTarget.dataset.services;
    saveLocal();
  });
}
// вешвю на инпут
for (const key in refs) {
  if (Object.hasOwnProperty.call(refs, key)) {
    refs[key].addEventListener('input', saveLocal);
  }
}

readLocal();

function saveLocal() {
  const data = {
    name: refs.name.value ? refs.name.value : '',
    tel: refs.tel.value ? refs.tel.value : '',
    service: refs.service.value ? refs.service.value : '',
    comment: refs.comment.value ? refs.comment.value : '',
  };

  localStorage.setItem('dataform', JSON.stringify(data));
  readLocal();
}

function readLocal() {
  const data = JSON.parse(localStorage.getItem('dataform'));
  if (data) {
    for (const key in data) {
      refs[key].value = data[key];

      if (Object.hasOwnProperty.call(data, key)) {
        dataToCrm[key] = data[key];
      }
    }
  } else {
    for (const key in refs) {
      if (Object.hasOwnProperty.call(refs, key)) {
        refs[key].value = '';
      }
    }
  }
}

function sendDataf(e) {
  e.preventDefault();

  if (!validator.isMobilePhone(dataToCrm.tel, ['uk-UA', 'pl-PL', 'ru-RU'])) {
    alert('Not valid Phone');

    // refs.telAfter.classList.toggle('mymodal-form__box-tel-active');
    return;
  }
  dataToCrm.url = document.URL;
  dataToCrm.name_form = 'Консультация сайт';
  dataToCrm.titel = 'Консультация сайт';

  localStorage.clear();
  sendData(dataToCrm);
  readLocal();
}
