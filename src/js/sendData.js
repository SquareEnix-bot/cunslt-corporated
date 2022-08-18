import sendToMail from './SendToMail';
import SendToTelegramm from './SendToTelegramm';
import formatter from './formaterPfone';

export default async function sendData(dataToCrm) {
  //   e.preventDefault();
  dataToCrm.tel = dataToCrm.tel.split(' ').join('');
  dataToCrm.tel = dataToCrm.tel.split('  ').join('');
  dataToCrm.tel = dataToCrm.tel.split('   ').join('');
  if (!validator.isMobilePhone(dataToCrm.tel, ['uk-UA', 'pl-PL', 'ru-RU'])) {
    alert('Not valid Phone');
    // refs.telAfter.classList.toggle('mymodal-form__box-tel-active');
    return 'no valid';
  }
  if (validator.isMobilePhone(dataToCrm.tel, ['uk-UA'])) {
    dataToCrm.tel = await formatter('UA', dataToCrm.tel);
  }
  if (validator.isMobilePhone(dataToCrm.tel, ['pl-PL'])) {
    dataToCrm.tel = await formatter('PL', dataToCrm.tel);
  }
  if (validator.isMobilePhone(dataToCrm.tel, ['ru-RU'])) {
    dataToCrm.tel = await formatter('RU', dataToCrm.tel);
  }
    dataToCrm.telegramm = `<a href="https://t.me/${dataToCrm.tel}">${dataToCrm.tel}</a>`;


  // console.log('object :>> senddata');
  dataToCrm.url = document.URL;
  // dataToCrm.name_form = 'Консультация сайт';
  dataToCrm.titel = 'Консультация сайт';

  let form_data = new FormData();
  // console.log('dataToCrm ---', dataToCrm);

  for (var key in dataToCrm) {
    form_data.append(key, dataToCrm[key]);
  }
  // console.log('form_data :>> ', form_data);
  const url = 'https://dev.uait.pro/concorp/tocrm.php';

  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.send(form_data);

  sendToMail(dataToCrm);
  SendToTelegramm(dataToCrm);

  localStorage.clear();

  //   readLocal();
  // alert('Ваши данные успешно отправлены! Спасибо, с Вами скоро свяжутся');
}
