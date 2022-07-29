console.log('xsaxsa');

const refs = {
  name: document.querySelector('#name'),
  tel: document.querySelector('#tel'),
  service: document.querySelector('#service'),
  comment: document.querySelector('#comment'),
};
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
    }
  }
}
