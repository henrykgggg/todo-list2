import { mylists, updateTodo, Mylist} from "./methods";
const changeTodo = ({ index, status }) => {
    Mylist[index - 1].completed = status;
    localStorage.setItem('mylist', JSON.stringify(Mylist));
    mylists();
  };
  const removeTodos = () => {
    const uncompletedTodos = Mylist.filter((element) => element.completed !== true);
    const newTodos = uncompletedTodos.map((element, index) => {
      element.index = index + 1;
      return element;
    });
    localStorage.setItem('mylist', JSON.stringify(newTodos));
    updateTodo(newTodos);
  };
  export { changeTodo ,removeTodos}