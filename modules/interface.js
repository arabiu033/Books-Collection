// Handle the opeartion of changing the interface of the page base on the user action
import {
  list, add, contact, sectionOne, sectionTwo, sectionThree,
} from './variables.js';

list.addEventListener('click', () => {
  list.style.color = 'blue';
  add.style.color = 'inherit';
  contact.style.color = 'inherit';
  sectionThree.classList.add('action');
  sectionTwo.classList.add('action');
  sectionOne.classList.remove('action');
});

add.addEventListener('click', () => {
  list.style.color = 'inherit';
  add.style.color = 'blue';
  contact.style.color = 'inherit';
  sectionThree.classList.add('action');
  sectionTwo.classList.remove('action');
  sectionOne.classList.add('action');
});

contact.addEventListener('click', () => {
  list.style.color = 'inherit';
  add.style.color = 'inherit';
  contact.style.color = 'blue';
  sectionThree.classList.remove('action');
  sectionTwo.classList.add('action');
  sectionOne.classList.add('action');
});