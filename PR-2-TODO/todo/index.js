const express = require('express');
const app = express();
const port = 8090;


app.use(express.json());


let todos = [
  { title: 'HTML', isCompleted: true, id: 1 },
  { title: 'JavaScript', isCompleted: true, id: 2 },
  { title: 'React', isCompleted: false, id: 3 }
];


app.get('/', (req, res) => {
  res.send('Welcome to the TODO API');
});


app.get('/todos', (req, res) => {
  res.send(todos);
});


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


app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));
  
  if (index === -1) {
    return res.status(404).send({ error: 'Todo not found' });
  }

  const deletedTodo = todos.splice(index, 1)[0];
  res.send({ deletedTodo, todos });
});


app.get('/todo/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === parseInt(id));
  
  if (!todo) {
    return res.status(404).send({ error: 'Todo not found' });
  }
  
  res.send(todo);
});

app.get('/findbystatus', (req, res) => {
  const { isCompleted } = req.query;
  if (isCompleted === undefined) {
    return res.status(400).send({ error: 'Query parameter isCompleted is required' });
  }
  
  const filteredTodos = todos.filter(t => t.isCompleted.toString() === isCompleted);
  res.send(filteredTodos);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
