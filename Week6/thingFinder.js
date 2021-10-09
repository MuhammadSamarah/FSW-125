const express = require('express');
const thingFinder = express.Router();

const fruit = [
    {
    type:"banana",
    brand:"chicita",
    price:5,
 
},
{
    type:"orange",
    brand:"naval",
    price:7,
    
},
{
    type:"grapes",
    brand:"chiquita",
    price:15,
    
},
{
    type:"apples",
    brand:"naval",
    price:12,
    
},
]
thingFinder.route('/').get( (req,res) =>{
    res.send(fruit)
})
thingFinder.route('/:fruitType').get((req, res ) =>{
    const fruitType = req.params.fruitType
    const foundfruit = fruit.find(fruit => fruit.type === fruitType)
    res.send(foundfruit)

})

module.exports = thingFinder