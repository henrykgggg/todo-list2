import {
  mylists, addmylist, editmylist, deletemylist,
} from '../modules/methods.js';

import { changeTodo, removeTodos } from '../modules/clear.js';

const listGroup = document.getElementById('todo-lists');
const newTask = document.querySelector('.todo-add').querySelector('input');
const submitIcon = document.querySelector('.todo-add').querySelector('i');
newTask.addEventListener('keypress', (event) => addmylist(event));
submitIcon.addEventListener('click', () => addmylist('clicked'));

listGroup.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'delete-icon') deletemylist(li.id);
  if (clickedItem === 'checked-icon') changeTodo({ index: li.id, status: false });
  if (clickedItem === 'unchecked-icon') changeTodo({ index: li.id, status: true });
});

listGroup.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (pressedItem === 'edit-todo') editmylist({ index: li.id, event });
});
const clearCompletedButton = document.querySelector('.todo-delete');
clearCompletedButton.addEventListener('click', removeTodos);

window.addEventListener('load', () => { mylists(); });