import sendData from './sendData';

const refs = {
  name: '',
  tel: '',
};
const dataToCrm = {};

// console.log('object', send);

const qa = [
  {
    question: 'Какой вид на жительство вы хотите получить?',
    correct: '',
    incorrect: [
      'ВНЖ (karta czasowego pobytu) ',
      'ПМЖ (stały pobyt)',
      'Карта резидента (Karta Rezydenta Długoterminowego )',
      'Гражданство (Obywatelstwo)',
    ],
  },
  {
    question: 'На каком основании вы сейчас находитесь в Польше ?',
    correct: 'Карта побыта',
    incorrect: [
      'Карта побыта',
      'Виза действующая',
      'Виза продленная',
      'Безвиз',
    ],
  },
  {
    question: 'В каком городе вы хотите подать документы?',
    correct: 'Варшава',
    incorrect: ['Варшава', 'Лодзь', 'Любой ответ'],
  },
];
const openQwiz = document.querySelectorAll('.js-qwiz-open');
const qwiz = document.querySelector('.qwiz');
const qContainer = document.querySelector('.form-c');

const answerContainer = document.querySelector('.a');
const questionCon = document.querySelector('.q');
const question = document.querySelector('.q-item');
const bar = document.querySelector('.bar');
const barContainer = document.querySelector('.progressBar');
const progressBar = document.querySelector('.bar-w');
const next = document.querySelector('.next');
const startBtn = document.querySelector('.start-game');
const questions = [];
const player = { score: 0, answers: [] };
let cur = 0;
const holder = [];

(() => {
  loadQuestions(); // load questions immediately
})();

function loadQuestions() {
  qa.forEach(e => {
    // loop through "qa"
    let temp = [];
    e.incorrect.forEach(ans => {
      // loop through 'qa.incorrect' => place false on incorrect items
      let obj = {
        response: ans,
        correct: false,
      };
      temp.push(obj);
    });

    // let obj = {
    //   // place true on correct items
    //   response: e.correct,
    //   correct: true,
    // };
    // temp.push(obj);
    let mainTemp = {
      question: e.question,
      options: temp, // both correct and incorrect options are stored here
      correct: e.correct, // correct answer
    };
    questions.push(mainTemp); // push into global
  });
}
function newQuestion() {
  // console.log('questions.length', questions.length);
  if (cur >= questions.length) {
    next.innerHTML = '';
    results();
  } else {
    next.innerHTML = '';
  }
  answerContainer.innerHTML = '';
  const el = questions[cur];
  progess();
  // el.options.sort(() => {
  //   return 0;
  // });

  const capQuestion =
    el.question.charAt(0).toUpperCase() + el.question.slice(1);
  question.textContent = `${capQuestion}?`;
  answerContainer.innerHTML = '';

  el.options.forEach(option => {
    const divOption = document.createElement('div');
    holder.push(divOption);
    divOption.correctAnswer = el.correct;
    divOption.que = capQuestion;
    divOption.isITcorrect = option.correct;
    divOption.classList.add('a-item');
    divOption.textContent = option.response;
    answerContainer.append(divOption);
    divOption.addEventListener('click', optSelect);
  });
}

// if selected option is T || F
function optSelect(e) {
  endTurn();
  if (e.target.isITcorrect) {
    player.score++;
    let obj = {
      que: e.target.que,
      res: e.target.textContent,
      correct: true,
      qNum: cur,
    };
    player.answers.unshift(obj);
    e.target.style.color = '#008205';
    e.target.style.backgroundColor = '#dbfff3';
  } else {
    let obj = {
      que: e.target.que,
      res: e.target.textContent,
      correct: false,
      qNum: cur,
    };
    player.answers.unshift(obj);
    e.target.style.color = '#e91e63';
    e.target.style.backgroundColor = '#ffd3e2';
  }
  e.target.style.cursor = 'pointer';
  // console.log(
  //   `e.target.que ${e.target.que}, e.target.textContent ${e.target.textContent} / ${player.answers}`
  // );

  afterAnsver();
  // player.answers.push(temp);
}

// OPTIONS not selected have a unique style

function endTurn() {
  holder.forEach(el => {
    el.removeEventListener('click', optSelect);
    el.style.backgroundColor = '#ffffff05';
    el.style.color = '#565656';
    el.style.cursor = 'default';
  });
  cur++;
  if (cur >= questions.length) {
    next.innerHTML = '';
  } else {
    next.innerHTML = '';
  }
}

function progess() {
  bar.style.width = '60%';
  next.classList.add('progressActive');
  question.style.display = 'block';

  const currentQ = cur + 1;
  const progressIs = (currentQ / questions.length) * 100;

  if (progressIs === 100) {
    next.innerHTML = '';
    progressBar.style.maxWidth = '100%';
  }
  progressBar.style.width = `${progressIs}%`;
}

startBtn.addEventListener('click', newQuestion);
qwiz.addEventListener('click', e => {
  e.preventDefault();

  if ([...e.target.classList][0] === 'qwiz') {
    qwiz.classList.toggle('visually-hidden');
    restartGame();
  }
});
openQwiz.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    qwiz.classList.toggle('visually-hidden');
    newQuestion();
  });
});
// openQwiz.addEventListener('click', e => {
//   e.preventDefault();
//   qwiz.classList.toggle('visually-hidden');
//   console.log('open :>> ');
//   newQuestion();
// });

next.addEventListener('click', afterAnsver);

// update score while answering each Q

function results() {
  // console.log(player.score);
  // console.log('Result');
  // console.table(player.answers);
  question.style.display = 'block';
  answerContainer.innerHTML = '';
  question.textContent = `Данные для связи`;
  const resultsMockup = `
	<form class="quiz-form__list">
      <label for="name">Ваше имя</label>
      <input
        class="quiz-form__input"
        name="name"
        id="quiz-name"
        placeholder="Ваше имя *"
        required
      />

      <label for="tel">Телефон</label>

      <input
        class="quiz-form__input"
        type="tel"
        name="phone_number"
        id="quiz-tel"
        placeholder="Ваш телефон *"
          
      />
      <button class="quiz-form__btn" type="submit">Заказать консультацию</button>
    </form>`;
  answerContainer.insertAdjacentHTML('beforeend', resultsMockup);
  refs.tel = document.querySelector('#quiz-tel');
  refs.name = document.querySelector('#quiz-name');
  for (const key in refs) {
    if (Object.hasOwnProperty.call(refs, key)) {
      refs[key].addEventListener('input', saveLocal);
    }
  }
  const send = document.querySelector('.quiz-form__btn');
  send.addEventListener('click', prepereToSend);
  let progressIs = (player.score / questions.length) * 100;
  progressIs = 100;
  next.innerHTML = `Спасибо!`;

  if (progressIs <= 50) {
    bar.style.backgroundColor = `#ff8585`;
    progressBar.style.backgroundColor = `red`;
  } else if (progressIs <= 75) {
    bar.style.backgroundColor = `#ffc582`;
    progressBar.style.backgroundColor = `#ff8900`;
  } else {
    progressBar.style.backgroundColor = `#00d15e`;
    bar.style.backgroundColor = `#bcffda`;
  }
  // progressBar.style.backgroundColor = `#00d15e`;
  // bar.style.backgroundColor = `#00d15e`;
  // progressBar.style.width = `100%`;
  // loadQuestions();
}
function restartGame() {
  // console.log('reset');
  player.score = 0;
  player.answers = [];

  cur = 0;
  questions.length = 0;
  loadQuestions();
  newQuestion();
}

function afterAnsver() {
  if (cur >= questions.length) {
    results();
  } else {
    newQuestion();
  }
}

function saveLocal() {
  const data = {
    name: refs.name.value ? refs.name.value : '',
    tel: refs.tel.value ? refs.tel.value : '',
    comment: '',
  };

  player.answers.map(item => {
    data[item.que] = item.res;
  });
  localStorage.setItem('quizdataform', JSON.stringify(data));
  readLocal();
}

function readLocal() {
  const data = JSON.parse(localStorage.getItem('quizdataform'));
  if (data) {
    for (const key in data) {
      // refs[key].value = data[key];

      if (Object.hasOwnProperty.call(data, key)) {
        dataToCrm[key] = data[key];
        if (key === 'tel') {
          dataToCrm.telegramm = `<a href="https://t.me/${data[key]}">${data[key]}</a>`;
        }
      }
    }
    dataToCrm.name_form = 'QWIZ';
  } else {
    for (const key in refs) {
      if (Object.hasOwnProperty.call(refs, key)) {
        // refs[key].value = '';
      }
    }
  }
}

async function prepereToSend(e) {
  e.preventDefault();
  const resp = await sendData(dataToCrm);
  if (resp === 'no valid') {
    return;
  }
  closeQwiz();
}

function closeQwiz() {
  question.style.display = 'block';
  question.style.color = '#1f2732';

  answerContainer.innerHTML = '';
  question.textContent = `Спасибо с вами скоро свяжутся`;
  qContainer.style.backgroundColor = `#d1b06b`;
  // const resultsMockup = `<div>Спасибо с вами скоро свяжутся</div>`;
  setTimeout(() => {
    qwiz.classList.toggle('visually-hidden');
    qContainer.style.backgroundColor = `#1c1c23`;
    question.style.color = '#fff';

    restartGame();
  }, 3500);

}
