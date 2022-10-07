function getList() {
    let list = [];
    if (!localStorage.getItem('mylist')) return list;
    list = JSON.parse(localStorage.getItem('mylist'));
    return list;
  }
  let Mylist = getList(); //eslint-disable-line
  const mainLists = document.getElementById('todo-lists');
  const newTask = document.querySelector('.todo-add').querySelector('input');
  const mylists = () => {
    const todosElement = Mylist.map((item) => `
          <li class="todo-list todo-item" id=${item.index}>
            ${item.completed === true ? `
              <i class="fa-solid fa-check checked-icon"></i>`
      : '<i class="fa-solid fa-square unchecked-icon"></i>'}
            <input type="text" class=${item.completed === true ? 'decoration edit-todo' : ' edit-todo'}  value="${item.description}">
            <span class="edit-focus-element"></span>
            <i class="fa-solid fa-trash-can delete-icon"></i>
            <i class="fa-solid fa-ellipsis-vertical more-icon"></i>
          </li>`).join('');
    mainLists.innerHTML = todosElement;
    return mainLists;
  };
  
  const updateTodo = (items) => {
    Mylist = items;
    mylists();
  };
  
  const addmylist = (event) => {
    if (newTask.value === '') return;
    if (event.key === 'Enter' || event === 'clicked') {
      const todoElement = {
        description: newTask.value,
        completed: false,
        index: Mylist.length + 1,
      };
      newTask.value = '';
      Mylist = [...Mylist, todoElement];
      localStorage.setItem('mylist', JSON.stringify(Mylist));
      mylists();
    }
  };
  
  const editmylist = ({ index, event }) => {
    if (event.target.value === '') return;
    if (event.key === 'Enter') {
      Mylist[index - 1].description = event.target.value;
      localStorage.setItem('mylist', JSON.stringify(Mylist));
    }
  };
  
  const deletemylist = (targetIndex) => {
    const filterList = Mylist.filter((item) => +item.index !== +targetIndex);
    const newmylist = filterList.map((item, index) => ({
      description: item.description,
      completed: item.completed,
      index: index + 1,
    }));
    localStorage.setItem('mylist', JSON.stringify(newmylist));
    Mylist = newmylist;
    mylists();
  };

  export {
    mylists, addmylist, editmylist, deletemylist, updateTodo, Mylist
  };