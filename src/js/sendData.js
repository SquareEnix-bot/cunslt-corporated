import sendToMail from './SendToMail';
import SendToTelegramm from './SendToTelegramm';

export default function sendData(dataToCrm) {
  //   e.preventDefault();
  console.log('asdsadsa :>> ');
  if (!validator.isMobilePhone(dataToCrm.tel, ['uk-UA', 'pl-PL', 'ru-RU'])) {
    alert('Not valid Phone');

    // refs.telAfter.classList.toggle('mymodal-form__box-tel-active');
    return;
  }
  console.log('object :>> senddata');
  dataToCrm.url = document.URL;
  dataToCrm.name_form = 'Консультация сайт';
  dataToCrm.titel = 'Консультация сайт';

  let form_data = new FormData();
  console.log('dataToCrm ---', dataToCrm);

  for (var key in dataToCrm) {
    form_data.append(key, dataToCrm[key]);
  }
  console.log('form_data :>> ', form_data);
  const url = 'https://dev.uait.pro/concorp/tocrm.php';

  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.send(form_data);
  sendToMail(dataToCrm);
  SendToTelegramm(dataToCrm);

  localStorage.clear();

  //   readLocal();
  alert('Ваши данные успешно отправлены! Спасибо, с Вами скоро свяжутся');
}
