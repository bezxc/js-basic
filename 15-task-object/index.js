const ToDoList = {
  todos: [],
  addTodo: function (todo) {
    const newTodo = { ...todo };

    if (newTodo.title === "") {
      console.log("Не указан заголовок");
      return;
    }
    if (newTodo.priority === undefined) {
      newTodo.priority = 1;
    }
    this.todos.push(newTodo);
  },
  getTodoById: function (id) {
    const todo = this.todos.find((todo) => todo.id === id);

    return todo === undefined ? console.log("Элемент не найден") : todo;
  },
  removeTodoById: function (id) {
    this.getTodoById(id);

    this.todos = this.todos.filter((todo) => todo.id !== id);

    return this.todos;
  },
  updateTodoById: function (id, data) {
    this.getTodoById(id);
    this.todos = this.todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          ...data,
        };
      }
      return todo;
    });
  },
  sortTodoByPriority: function (desc = false) {
    if (desc) {
      return this.todos.sort((a, b) => b.priority - a.priority);
    }
    return this.todos.sort((a, b) => a.priority - b.priority);
  },
};

const todos = [
  { title: "Beatrice.Witting", id: 12, priority: undefined },
  { title: "Julien_Kutch55", id: 46, priority: 9 },
  { title: "Darryl_Hane", id: 13, priority: 26 },
  { title: "Kitty1", id: 4, priority: 41 },
  { title: "Kameron_Lebsack82", id: 17, priority: 4 },
  { title: "Armand63", id: 43, priority: 45 },
  { title: "Theresia_Rice", id: 4, priority: 33 },
  { title: "Nettie84", id: 5, priority: 14 },
  { title: "Damian.Cole83", id: 46, priority: 15 },
  { title: "Reymundo.Kautzer", id: 20, priority: 5 },
];

todos.forEach((item) => ToDoList.addTodo(item));
console.log("__________________________ 1");
console.log("SORT BY PRIORITY");
console.log(ToDoList.sortTodoByPriority());
console.log("__________________________");

console.log("__________________________ 2");
console.log("GET TODO BY ID", ToDoList.getTodoById(13));
console.log("__________________________");

console.log("__________________________ 3");
console.log("UPDATE TODO BY ID");
ToDoList.updateTodoById(12, {
  title: "New Title",
});
console.log(ToDoList.getTodoById(12));
console.log("__________________________");

console.log("__________________________ 4");
console.log("REMOVE TODO BY ID", ToDoList.removeTodoById(4));
console.log("__________________________");
