// document
//   .querySelector('#button1')
//   .addEventListener('click', () =>
//     document.querySelector('#answer1').classList.toggle('hidden')
//   );

document
  .querySelectorAll('button')
  .forEach((button) => button.addEventListener('click', toggleAnswer));

function toggleAnswer(button) {
  button.parentNode.querySelector('p').classList.toggle('hidden');
}
