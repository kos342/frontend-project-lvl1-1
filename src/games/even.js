import number from '../Helper.js';

const evenNumbers = () => {
  const randomNumber = number(10, 0);
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const correctAnswer = () => {
    if (randomNumber % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const correctAnswer1 = correctAnswer();
  return [correctAnswer1, randomNumber, gameDescription];
};
export default evenNumbers;
