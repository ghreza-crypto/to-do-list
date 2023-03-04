import {
  savedData, assignId, viewData,
} from './toDoCrud.js';

const removeAllCompleted = () => {
  const filteredArray = savedData().filter((item) => {
    if (item.completed === false) {
      return item;
    }
    return '';
  });
  assignId(filteredArray);
  localStorage.setItem('todoListStorage', JSON.stringify(filteredArray));

  viewData();
};
export default removeAllCompleted;