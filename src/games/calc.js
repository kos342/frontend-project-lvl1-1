import number from '../Helper.js';
import gameBrainLogic from '../index.js';

const gameDescription = 'What is the result of the expression?';
const сalculate = (randomNumber1, randomNumber2, operator) => {
  switch (operator) {
    case '+':
      return (String(randomNumber1 + randomNumber2));
    case '-':
      return (String(randomNumber1 - randomNumber2));
    case '*':
      return (String(randomNumber1 * randomNumber2));
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};
const calc = () => {
  const randomNumber1 = number(100, 1);
  const randomNumber2 = number(100, 1);
  const ops = ['+', '-', '*'];
  const opindex = number(3, 0);
  const operator = ops[opindex];
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnswer = сalculate(randomNumber1, randomNumber2, operator);
  return [correctAnswer, question];
};
export default () => gameBrainLogic(calc, gameDescription);
