const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const products = []; // Mock data
const users = []; // Mock data
const carts = []; // Mock data

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  res.json(product);
});

app.post('/api/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.json(product);
});

app.put('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  products[index] = req.body;
  res.json(products[index]);
});

app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  products.splice(index, 1);
  res.json({ message: 'Product deleted' });
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  res.json(user);
});

app.post('/api/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
});

app.put('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  users[index] = req.body;
  res.json(users[index]);
});

app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  users.splice(index, 1);
  res.json({ message: 'User deleted' });
});

app.get('/api/carts', (req, res) => {
  res.json(carts);
});

app.get('/api/carts/:id', (req, res) => {
  const cart = carts.find(c => c.id === parseInt(req.params.id));
  res.json(cart);
});

app.post('/api/carts', (req, res) => {
  const cart = req.body;
  carts.push(cart);
  res.json(cart);
});

app.put('/api/carts/:id', (req, res) => {
  const index = carts.findIndex(c => c.id === parseInt(req.params.id));
  carts[index] = req.body;
  res.json(carts[index]);
});

app.delete('/api/carts/:id', (req, res) => {
  const index = carts.findIndex(c => c.id === parseInt(req.params.id));
  carts.splice(index, 1);
  res.json({ message: 'Cart deleted' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
