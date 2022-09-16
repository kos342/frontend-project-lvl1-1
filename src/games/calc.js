import {getRndInteger} from '../Helper.js';
import { getRndOperator } from '../Helper.js';

const calc = () => {
  const randomNumber1 = getRndInteger(100, 1);
  const randomNumber2 = getRndInteger(100, 1);
  let getRandomOperator = getRndOperator();
  let result1 = '';
  const question = `${randomNumber1} ${getRandomOperator} ${randomNumber2}`;
  let result = 0; 
  switch (getRandomOperator) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      result = null;
  }
  result1 += result;
  return [result1, question];
};
export default calc;
