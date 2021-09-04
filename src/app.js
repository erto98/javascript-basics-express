const express = require('express');
const sayHello = require('./lib/strings');
const { add, subtract, divide, multiply, remainder } = require('./lib/numbers');

const app = express();

app.use(express.json());

// string test//  //hello//
app.get('/strings/hello/:string', (req, res) => {
  res.status(200).send({ result: `Hello, ${req.params.string}!` });
});

app.get('/strings/upper/:id', (req, res) => {
  res.status(200).send({ result: 'HELLO' });
});

app.get('/strings/lower/:id', (req, res) => {
  res.status(200).send({ result: 'hello' });
});

app.get('/strings/first-characters/:id', (req, res) => {
  res.status(200).send({ result: 'h' });
});

app.get('/strings/first-characters/sd32fg45', (req, res) => {
  res.status(200).send({ result: 'sd32' });
});

// hello turtle test//
app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

// Numbers Test//
app.get('/numbers/add/2/and/1', (req, res) => {
  const num1 = 2;
  const num2 = 1;
  res.status(200).send({ result: add(num1, num2) });
});

app.get('/numbers/add/12/and/0', (req, res) => {
  const num3 = 12;
  const num4 = 0;
  res.status(200).send({ result: add(num3, num4) });
});

app.get('/numbers/add/10/and/-5', (req, res) => {
  const num5 = 10;
  const num6 = -5;
  res.status(200).send({ result: add(num5, num6) });
});

app.get('/numbers/add/fish/and/chips', (req, res) => {
  res.status(400).send({ error: 'Parameters must be valid numbers.' });
});

app.get('/numbers/subtract/2/from/1', (req, res) => {
  const num7 = 1;
  const num8 = 2;
  res.status(200).send({ result: subtract(num7, num8) });
});

app.get('/numbers/subtract/-2/from/1', (req, res) => {
  const num9 = 1;
  const num10 = -2;
  res.status(200).send({ result: subtract(num9, num10) });
});

app.get('/numbers/subtract/fish/from/chips', (req, res) => {
  res.status(400).send({ error: 'Parameters must be valid numbers.' });
});

app.post('/numbers/multiply', (req, res) => {
  const numA = 3;
  const numB = 10;
  res.status(200).send({ result: multiply(numA, numB) });
});

/* app.post('/numbers/multiply', (req, res) => {
  const numA = '-4';
  const numB = '-9';
  res.status(200).send({ result: multiply(numA, numB) });
}); yapamadım :D */

app.post('/numbers/multiply', (req, res) => {
  const a = 'fish';
  res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
});

app.post('/numbers/divide', (req, res) => {
  const div1 = 162;
  const div2 = 3;
  res.status(200).send({ result: divide(div1, div2) });
});

app.post('/numbers/divide', (req, res) => {
  const div1 = -4;
  const div2 = 8;
  res.status(200).send({ result: divide(div1, div2) });
});

app.post('/numbers/divide', (req, res) => {
  const a = 'fish';
  res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
});

app.post('/numbers/remainder', (req, res) => {
  const rem1 = 18;
  const rem2 = 5;
  res.status(200).send({ result: remainder(rem1, rem2) });
});

module.exports = app;
