class TodoList {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const listTodo = document.getElementById('list');
const addTodoInput = document.getElementById('addTodoInput');

const savedData = () => {
  const localStorageTodo = JSON.parse(localStorage.getItem('todoListStorage')) || [];
  return localStorageTodo;
};

const viewData = () => {
  listTodo.replaceChildren();
  savedData().forEach((item, id) => {
    let isCompleted;
    if (item.completed === true) {
      isCompleted = 'checked';
    }
    listTodo.innerHTML += `
        <div>
          <input id='check-${id}' type='checkbox' onChange='completeTask(${id})' ${isCompleted}>
          <input onkeyup='updateList(${id})' type="text" id='inputField-${id}' value='${item.description}' class='no-outline' />
          <i class=" delete fa fa-trash" aria-hidden="true" onclick='deleteTodo(${item.index})' id='delete-${item.index}'></i>
        </div>
          `;
  });
};

const saveTodo = (description, completed, index) => {
  const newTask = new TodoList(description, completed, index);
  const tasks = savedData();
  tasks.push(newTask);
  localStorage.setItem('todoListStorage', JSON.stringify(tasks));
  addTodoInput.value = '';

  viewData();
};

const assignId = (filteredArray) => {
  filteredArray.forEach((item, i) => {
    item.index = i + 1;
  });
};

window.deleteTodo = (id) => {
  const filteredArray = savedData().filter((item) => {
    if (item.index !== id) {
      return item;
    }
    return '';
  });
  assignId(filteredArray);
  localStorage.setItem('todoListStorage', JSON.stringify(filteredArray));

  viewData();
};

window.updateList = (id) => {
  const updateInput = document.querySelector(`#inputField-${id}`).value;
  const updateArray = savedData().map((item) => {
    if (item.index - 1 === id) {
      item.description = updateInput;
    }
    return item;
  });

  localStorage.setItem('todoListStorage', JSON.stringify(updateArray));
};
window.completeTask = (id) => {
  const updateArray = savedData().map((item) => {
    if (item.index - 1 === id) {
      if (item.completed === true) {
        item.completed = false;
      } else {
        item.completed = true;
      }
    }
    return item;
  });

  localStorage.setItem('todoListStorage', JSON.stringify(updateArray));
};

export {
  savedData, saveTodo, viewData, assignId,
};