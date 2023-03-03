import './style.css';

const toDoList = [
  {
    description: 'washing clothes',
    completed: false,
    index: 0,
  },
  {
    description: 'driving to university',
    completed: false,
    index: 1,
  },
  {
    description: 'going to gym',
    completed: false,
    index: 2,
  },
  {
    description: 'buying groceries',
    completed: false,
    index: 3,
  },
];

const list = document.querySelector('#list');
toDoList.forEach((todo) => {
  const html = `<li><span>${todo.description}</span></li>`;
  list.innerHTML += html;
  list.innerHTML += '<hr>';
});