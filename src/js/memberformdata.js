// console.log('xsaxsa');
import sendData from './sendData';

const refs = {
  name: document.querySelector('#name'),
  tel: document.querySelector('#tel'),
  service: document.querySelector('#service'),
  comment: document.querySelector('#comment'),
  form: document.querySelector('.js-form-container'),
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
         if (key === 'tel') {
           dataToCrm.telegramm = `<a href="https://t.me/${data[key]}">${data[key]}</a>`;
         }
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

async function sendDataf(e) {
  e.preventDefault();
  dataToCrm.tel = dataToCrm.tel.split(' ').join('');
  dataToCrm.tel = dataToCrm.tel.split('  ').join('');
  dataToCrm.tel = dataToCrm.tel.split('   ').join('');

  dataToCrm.url = document.URL;
  dataToCrm.titel = 'Консультация сайт';
  dataToCrm.name_form = 'FORMA';
  const resp = await sendData(dataToCrm);
  if (resp === 'no valid') {
    return;
  }

  localStorage.clear();
  await sucsesSendForma();
  readLocal();
}

async function sucsesSendForma() {
  const heightForm = window.getComputedStyle(refs.form).height;
  const resultsMockup = `<div class="form__sucsess"  height = "${heightForm}"><div class = "form__sucsess-text">Ваши данные успешно отправлены!</div></div>
 `;

  refs.form.innerHTML = '';
  refs.form.insertAdjacentHTML('beforeend', resultsMockup);
  const sucsessForm = document.querySelector('.form__sucsess');
  sucsessForm.style.height = heightForm;

  setTimeout(() => {
    const resultsMockup = ` <form class="form__list">
      <label for="name">Ваше имя</label>
      <input
        class="form__input"
        name="name"
        id="name"
        placeholder="Ваше имя *"
        required
      />

      <label for="tel">Телефон</label>

      <input
        class="form__input"
        type="tel"
        name="phone_number"
        id="tel"
        placeholder="Ваш телефон *"
          
      />

      <label for="service">Услуга</label>
      <select
        class="form__input"
        id="service"
        name="service_name"
        placeholder="Ваш телефон"
        
      >
        <option class="form__option" value="---">Выберете направление</option>
        <option class="form__option" value="ВНЖ (karta czasowego pobytu)">
          ВНЖ (karta czasowego pobytu)
        </option>
        <option class="form__option" value="ПМЖ (karta stałego pobytu)">
          ПМЖ (karta stałego pobytu)
        </option>
        <option class="form__option" value="Карта долгосрочного резидента">
          Карта долгосрочного резидента
        </option>

        <option class="form__option" value="Гражданство">Гражданство</option>
        <option class="form__option" value="Регистрация фирмы">
          Регистрация фирмы
        </option>
        <option class="form__option" value="Бухгалтерские услуги">
          Бухгалтерские услуги
        </option>
        <option class="form__option" value="Составление договоров">
          Составление договоров
        </option>
      </select>
      <label for="comment">Комментарий</label>

      <textarea
        class="form__input form__comment"
        id="comment"
        name="comment"
        rows="5"
        placeholder="Напишите что то ..."
      ></textarea>
      <button class="form__btn" type="submit">Заказать консультацию</button>
    </form>`;
    refs.form.innerHTML = '';
    refs.form.insertAdjacentHTML('beforeend', resultsMockup);
  }, 3500);
}
