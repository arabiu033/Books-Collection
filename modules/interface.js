// Handle the opeartion of changing the interface of the page base on the user action

list.addEventListener('click', () => {
  sectionThree.classList.add('action');
  sectionTwo.classList.add('action');
  sectionOne.classList.remove('action');
});

add.addEventListener('click', () => {
  sectionThree.classList.add('action');
  sectionTwo.classList.remove('action');
  sectionOne.classList.add('action');
});

contact.addEventListener('click', () => {
  sectionThree.classList.remove('action');
  sectionTwo.classList.add('action');
  sectionOne.classList.add('action');
});