// console.log('xsaxsa');

const refs = {
  name: document.querySelector('#name'),
  tel: document.querySelector('#tel'),
  service: document.querySelector('#service'),
  comment: document.querySelector('#comment'),
};
const dataToCrm = {};

const send = document.querySelector('.form__btn');
console.log('object', send);
send.addEventListener('click', sendData);

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
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      refs[key].value = data[key];
      dataToCrm[key] = data[key];
    }
  }
}

function sendData(e) {
  e.preventDefault();

  console.log('insidesenddata');

  if (!validator.isMobilePhone(dataToCrm.tel, ['uk-UA'])) {
    alert('Not valid Phone');
    console.log(
      'Not valid Phone ',
      validator.isMobilePhone(data.tel, ['uk-UA'])
    );
    // refs.telAfter.classList.toggle('mymodal-form__box-tel-active');
    return;
  }
  dataToCrm.url = document.URL;
  dataToCrm.name_form = 'Консультация сайт';
  dataToCrm.titel = 'Консультация сайт';

  let form_data = new FormData();

  for (var key in dataToCrm) {
    form_data.append(key, dataToCrm[key]);

    console.log(key, '---', dataToCrm[key]);
  }
  // console.log(`Отправка данных ${form_data.values}`);
  const url = 'https://dev.uait.pro/concorp/tocrm.php';

  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.send(form_data);
  console.log(`request ${request}`);
  // refs.sucses.classList.toggle('active');
  setTimeout(() => {
    // Will run last, after 2000 milliseconds
    console.log('send ', form_data);
    // refs.sucses.classList.toggle('active');
  }, 1500);
  localStorage.clear();
  // if (readData) {
  //   // readData.email="asdas";
  //   data.name = readData.name;
  //   data.phone = readData.phone;
  //   data.email = readData.email;
  // } else {
  //   data.name = '';
  //   data.phone = '';
  //   data.email = '';
  // }
  // refs.formain.name.value = data.name;
  // refs.formain.phone.value = data.phone;
  // refs.formain.email.value = data.email;
  // saveLocal();
  readLocal();
  // saveLocal();
}
