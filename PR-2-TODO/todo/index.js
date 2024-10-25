const express = require('express');
const app = express();
const port = 8090;

// Middleware to parse send bodies
app.use(express.json());

// Initial Todos
let todos = [
  { title: 'HTML', isCompleted: true, id: 1 },
  { title: 'JavaScript', isCompleted: true, id: 2 },
  { title: 'React', isCompleted: false, id: 3 }
];

// 1. GET route to send a welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the TODO API');
});

// 2. GET route to fetch all todos
app.get('/todos', (req, res) => {
  res.send(todos);
});

// 3. POST route to add a new todo
app.post('/addtodo', (req, res) => {
  const { title, isCompleted } = req.body;
  if (!title || isCompleted === undefined) {
    return res.status(400).send({ error: 'Invalid data' });
  }
  
  const newTodo = {
    id: todos.length + 1,
    title,
    isCompleted
  };
  
  todos.push(newTodo);
  res.send(newTodo);
});

// 4. PATCH route to update a todo
app.patch('/update/:id', (req, res) => {
  const { id } = req.params;
  const { title, isCompleted } = req.body;
  const todo = todos.find(t => t.id === parseInt(id));
  
  if (!todo) {
    return res.status(404).send({ error: 'Todo not found' });
  }
  
  if (title !== undefined) todo.title = title;
  if (isCompleted !== undefined) todo.isCompleted = isCompleted;
  
  res.send(todo);
});

// 5. DELETE route to delete a todo
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));
  
  if (index === -1) {
    return res.status(404).send({ error: 'Todo not found' });
  }

  const deletedTodo = todos.splice(index, 1)[0];
  res.send({ deletedTodo, todos });
});

// 6. GET route to fetch a single todo by id
app.get('/todo/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === parseInt(id));
  
  if (!todo) {
    return res.status(404).send({ error: 'Todo not found' });
  }
  
  res.send(todo);
});

// 7. GET route to filter todos by their completion status
app.get('/findbystatus', (req, res) => {
  const { isCompleted } = req.query;
  if (isCompleted === undefined) {
    return res.status(400).send({ error: 'Query parameter isCompleted is required' });
  }
  
  const filteredTodos = todos.filter(t => t.isCompleted.toString() === isCompleted);
  res.send(filteredTodos);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
