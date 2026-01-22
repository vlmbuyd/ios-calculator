import { KEY_MAP } from './constants.js';
import Calculator from './model/Calculator.js';

const keypad = document.querySelector('.calculator__keypad');
const displayEl = document.querySelector('.calculator__value');

const calculator = new Calculator(displayEl);

// 부모 요소에게 이벤트 위임
keypad.addEventListener('click', (e) => {
  const target = e.target;

  if (!target.matches('button')) return;

  const type = target.dataset.type;
  const key = target.dataset.key;
  const content = target.innerText;

  handleCalculateInput(type, key, content);
});

// 키보드 입력 처리
window.addEventListener('keydown', (e) => {
  const key = e.key;
  const mappedKey = KEY_MAP[key] || key;
  const targetBtn = document.querySelector(`button[data-key="${mappedKey}"]`);

  if (!targetBtn) return;

  e.preventDefault();
  targetBtn.click();
  targetBtn.classList.add('pressed');

  setTimeout(() => {
    targetBtn.classList.remove('pressed');
  }, 150);
});

/**
 * 계산기 입력 처리
 * @param {string} type - 입력 타입 (number, operator, calculate)
 * @param {string} key - 입력 키
 * @param {string} content - 입력 내용
 * @returns
 */
const handleCalculateInput = (type, key, content) => {
  if (key === 'clear') {
    calculator.clearAll();
    return;
  }

  switch (type) {
    case 'number':
      calculator.appendNumber(content);
      break;
    case 'operator':
      calculator.appendOperator(content);
      break;
    case 'calculate':
      calculator.calculateResult();
      break;
  }
};
