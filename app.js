import Controller from './controller/Controller.js';
import Calculator from './model/Calculator.js';

// DOM 요소 선택
const keypadEl = document.querySelector('.calculator__keypad');
const displayEl = document.querySelector('.calculator__value');

// 인스턴스 생성 및 의존성 주입
const calculator = new Calculator(displayEl);

// 컨트롤러로 애플리케이션 시작
new Controller(calculator, keypadEl);
