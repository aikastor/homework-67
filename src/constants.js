const nums = ['1', '2', '3', '4', '5',
              '6', '7' ,'8', '9', '0'];
const buttons = {
  passLock: [...nums , ...['<', 'E']],
  calculator: [...nums, ...['+', '-', '=', '/', '*', 'C']]
};

export default buttons;