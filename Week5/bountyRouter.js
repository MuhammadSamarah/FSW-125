const express = require('express')
const app = express()
const { v4 : uuidv4 } = require('uuid')

app.use(express.json())
const bountyRouter = express.Router()
let bounty = [
    {firstName: 'Han', lastName: 'Solo', living: true, bountyAmount: 1000000, type: 'Jedi',_id: uuidv4()},
    {firstName: 'Darth', lastName: 'Vader', living: false, bountyAmount: 800000, type: 'Sith', _id: uuidv4()},
    {firstName: 'Luke', lastName: 'SkyWalker', living: true, bountyAmount: 60000000, type: 'Jedi', _id: uuidv4()},
    {firstName: 'Princess', lastName: 'Leia', living: false, bountyAmount: 100, type: 'Jedi', _id: uuidv4()},
    {firstName: 'R2', lastName: 'D2', living: false, bountyAmount: 10, type: 'Jedi', _id: uuidv4()}
]

bountyRouter.route('/')
.get((req, res) => {
        res.send(bounty)
})

.post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounty.push(newBounty)

        console.log(bounty)
        res.send(newBounty)
})

bountyRouter.route('/:bountyId')
.get((req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounty.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})
.put((req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounty[bountyIndex], req.body)

    res.send(updatedBounty)
})
.delete((req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    bounty.splice(bountyIndex,1) 
    res.send(`Successfully deleted`)
})
module.exports = bountyRouter