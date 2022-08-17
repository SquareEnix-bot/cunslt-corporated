export default async function sendToMail(data) {
  let str = '';

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      str += `<b>${key}</b>:  ${data[key]} <br>`;
    }
  }
  const test = Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'no-reply@uait.pro',
    Password: '350B5FB732544F2C15019A85A16CBB29992B',
    To: 'liza.skliarova2019@gmail.com',
    From: 'no-reply@uait.pro',
    Subject: 'NEW LEAD',
    Body: `New lead from site! <br> ${str}`,
  }).then(message => console.log(message));
  //   console.log('test :>> ', test);
  const test2 = Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'no-reply@uait.pro',
    Password: '350B5FB732544F2C15019A85A16CBB29992B',
    To: 'it@uait.pro',
    From: 'no-reply@uait.pro',
    Subject: 'NEW LEAD',
    Body: `New lead from site! <br> ${str}`,
  }).then(message => console.log(message));
  //   console.log('test :>> ', test);
}
