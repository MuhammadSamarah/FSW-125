const express = require('express');
const app = express();

const PORT = 3000;

const users = [
    {name: 'max', location: 'missing'}
];

const movies = [
    {name: 'cars 3'}
];

const vehicles = [
    {name: 'truck'}
];

app.get('/users', (req, res) => {
    res.send(users)

});

app.get('/movies', (req, res) => {
    res.send(movies)

});

app.get('/vehicles', (req, res) => {
    res.send(vehicles)
})


app.listen(PORT, () => {
    console.log(`App started on port: ${3000}`)
})