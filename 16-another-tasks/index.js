
let lastId = 0

const toDoList = {
  todos: [],
  addTodo: function (todo) {
    if (!todo) {
      return;
    }
    this.todos.push({
      ...todo,
      id: lastId + 1,
    });
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

const newTask = {
  todos: [
    {
      id: 1,
      name: "тест",
      description: "описание",
      order: 0,
    },
    {
      id: 243,
      name: "тест-243",
      description: "описание",
      order: 0,
    },
    {
      id: 106,
      name: "тест-106",
      description: "описание",
      order: 0,
    },
    {
      id: 3,
      name: "тест-3",
      description: "описание",
      order: 0,
    },
  ],
};

const data = {
  id: 2,
  name: "test",
  description: "some task description",
  order: 3,
};

const applyData = {
  id: 124124,
  name: "apply",
  description: "Apply",
  order: 12,
};

newTask.getTodoById = toDoList.getTodoById;

const addNewTask = toDoList.addTodo.bind(newTask);
const removeNewTask = toDoList.removeTodoById.bind(newTask);
const updateNewTask = toDoList.updateTodoById.bind(newTask);
const getNewTask = toDoList.getTodoById.bind(newTask);

// Bind
addNewTask(data);
removeNewTask(1);
updateNewTask(3, {
  name: "Updated todo",
});
console.log(newTask);

// Apply
toDoList.addTodo.apply(newTask, [applyData]);
toDoList.updateTodoById.apply(newTask, [
  3,
  {
    name: "Update from apply",
  },
]);
toDoList.removeTodoById.apply(newTask, [106]);
console.log("Apply", newTask);
