import './style.css';
import {
  savedData, saveTodo, viewData,
} from './modules/toDoCrud.js';
import removeAllCompleted from './modules/removeAllCompleted.js';

const form = document.querySelector('#toDoListForm');
const inputForm = document.getElementById('addTodoInput');
const clearAllCompleted = document.getElementById('clearAllCompleted');

viewData();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveTodo(inputForm.value, false, savedData().length + 1);
  viewData();
});

clearAllCompleted.addEventListener('click', () => {
  removeAllCompleted();
});