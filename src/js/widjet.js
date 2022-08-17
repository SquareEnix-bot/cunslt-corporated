const ref = document.querySelector('.call-socbox');
const widjet = document.querySelector('.widget');
const socItem = document.querySelectorAll('.widget-soclink__item');

ref.addEventListener('click', () => {
  console.log('inside');

  for (const iterator of socItem) {
    iterator.classList.toggle('widget-soclink__item--active');
  }
  widjet.classList.toggle('widget-active');
  ref.classList.toggle('call-socbox--off');
});

document.querySelector('body').addEventListener('click', e => {
  console.log('body', e.target.classList.contains('dev-soc'));
  //   widjet.classList.contains('widget--active');
  if (
    !e.target.classList.contains('dev-soc') &&
    widjet.classList.contains('widget-active') &&
    !e.target.classList.contains('call-socbox')
  ) {
    console.log('if');
    ref.classList.toggle('call-socbox--off');

    for (const iterator of socItem) {
      iterator.classList.toggle('widget-soclink__item--active');
    }
    widjet.classList.toggle('widget-active');
  }
});
