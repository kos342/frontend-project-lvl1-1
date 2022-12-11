import number from '../Helper.js';
import gameBrainLogic from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const IsSimpleNumber = (randomNumber) => {
  if (randomNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const evenNumbers = () => {
  const randomNumber = number(10, 0);
  const correctAnswer = IsSimpleNumber(randomNumber);
  return [correctAnswer, randomNumber];
};
export default () => gameBrainLogic(evenNumbers, gameDescription);
