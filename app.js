import { add } from './calculations.js';
const addInput1 = document.getElementById('input-1');
const addInput2 = document.getElementById('input-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

console.log(addInput1, addInput2, addButton, addAnswer);

import { sub } from './calculations.js';
const subInput1 = document.getElementById('sub-number-1');
const subInput2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');

console.log(subInput1, subInput2, subButton, subAnswer);

import { mult } from './calculations.js';
const multInput1 = document.getElementById('mult-number-1');
const multInput2 = document.getElementById('mult-number-2');
const multButton = document.getElementById('mult-button');
const multAnswer = document.getElementById('mult-answer');

console.log(multInput1, multInput2, multButton, multAnswer);




addButton.addEventListener('click', ()=>{
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);

    console.log(result);
    addAnswer.textContent = result;
});

subButton.addEventListener('click', ()=>{
    const value1 = Number(subInput1.value);
    const value2 = Number(subInput2.value);
    const result = sub(value1, value2);

    console.log(result);
    subAnswer.textContent = result;
});


multButton.addEventListener('click', ()=>{
  const value1 = Number(multInput1.value);
  const value2 = Number(multInput2.value);
  const result = mult(value1, value2);

  console.log(result);
  multAnswer.textContent = result;
});

