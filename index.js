const toDosStore = ["Shopping", "Home work", "Go to the gym"];


// create function to Insert new items to toDosStore
const insertTodo = (newTodo) => toDosStore.push(newTodo);

// create function to insert array of todos
// the function takes one Argument as array of todos items and push each item to toDosStore
const createTodos = (todos) => {
  for (let i = 0; i < todos.length; i++) {
    /*toDosStore.push(todos[i]);*/
    insertTodo(todos[i]);
  }
};

// create function to remove any item by order number
// the function takes one Argument as item order number
// orderNumber ==> item order
// (orderNumber - 1) ==> item index
const removeTodo = (orderNumber) => toDosStore.splice(orderNumber - 1, 1);

// create function to edit any item by order number
// the function takes 2 Arguments ==> the first Argument is item order number and the Second Argument is new item value

const editTodo = (orderNumber, newValue) =>
  (toDosStore[orderNumber - 1] = newValue);


const updateTodos = (todosOrder, newTodosValus) => {
  // your code
  for (let i = 0; i < newTodosValus.length; i++) {
    /**
     * todosOrder[i] - 1
    target item index 1 >> new value ==> Meet with PR department
    target item index 3 >> new value ==> By milk
    target item index 5 >> new value ==> Check the internet connect
     */
    console.log(
      `target item index ${todosOrder[i] - 1} >> new value ==> ${
        newTodosValus[i]
      }`
    );
    toDosStore[todosOrder[i] - 1] = newTodosValus[i];
  }
};

// RenderToDosListTemplate function
// this function prints the end Results as string template.
// check if toDosStore is empty return a message (To do list stor is empty)
// else return todos template

const RenderToDosListTemplate = () => {
  //check if toDosStore is empty return a message (To do list stor is empty)
  if (toDosStore.length < 1) {
    return "To do list stor is empty";
  } else {
    // toDosStore is not empty (we have todos items)
    // create a Variable ==> template store
    let template = "ToDo List: " + "\n";

    // for loop go Through toDosStore items and add each item to template
    for (let i = 0; i < toDosStore.length; i++) {
      template = `${template} ${i + 1}- ${toDosStore[i]} \n`;
    }

    return template;
  }
};

// Call Stack
insertTodo("test1");
insertTodo("test2");
insertTodo("test4");
insertTodo("test5");
removeTodo(3);
removeTodo(5);
insertTodo("Call Alex");
editTodo(3, "Pay bills");
editTodo(5, "Visiting Tommy");
createTodos(["Go to supermarket", "Meet with Ghassan", "New test"]);

updateTodos(
  [2, 4, 6],
  ["Meet with PR department", "By milk", "Check the internet connection"]
);


console.log(RenderToDosListTemplate());
