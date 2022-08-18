import parsePhoneNumber from 'libphonenumber-js';
export default async function formatter(country, number) {
  let res = '';

  const phoneNumber = parsePhoneNumber(number, country);
  if (phoneNumber) {
    res = phoneNumber.formatInternational();
    res = res.split(' ').join('');
    res = res.split('  ').join('');
    res = res.split('   ').join('');
    return res;
    console.log(`inside ${res}`);
  }
}
