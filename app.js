import { add } from './calculations.js';
const addInput1 = document.getElementById('input-1');
const addInput2 = document.getElementById('input-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

console.log(addInput1, addInput2, addButton, addAnswer);

import { sub } from './calculations.js';
const subNum1 = document.getElementById('sub-number1');
const subNum2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');

console.log(subNum1, subNum2, subButton, subAnswer);



addButton.addEventListener('click', ()=>{
  const value1 = Number(addInput1.value);
  const value2 = Number(addInput2.value);
  const result = add(value1, value2);

  console.log(result);
  addAnswer.textContent = result;
})



