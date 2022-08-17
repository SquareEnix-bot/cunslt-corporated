import ajax from 'ajax';
import axios from 'axios';
const BOT_TOKEN = '5413519952:AAFw67XJPQcpkFiO2IBF6ySQTfkKff0orAs';
const CHAT_ID = '-728657823';
export default async function sendToTelegramm(data) {
  let str = '';

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      str += `${key}:  ${data[key]}
       `;
    }
  }

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const params = { chat_id: CHAT_ID, text: str };
  await axios.get(url, { params: params });
}
