// 화면 초기값
export const INITIAL_DISPLAY_VALUE = '0';

// 연산자 우선순위
export const OPERATROS_PRIORITES = Object.freeze({
  HIGH: ['×', '÷'],
  LOW: ['+', '−'],
});

// 전체 연산자 목록
export const OPERATROS = [
  ...OPERATROS_PRIORITES.HIGH,
  ...OPERATROS_PRIORITES.LOW,
];

// 에러 메시지
export const ERROR_MESSAGE = 'NaN';

// 최대 입력 가능한 자릿수
export const MAX_DIGIT_LENGTH = 10;
