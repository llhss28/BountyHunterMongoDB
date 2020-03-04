const express = require("express")
const bounty = express.Router()
const Bounty = require("../models/bounty")

bounty.route("/")

.get((req, res, next) => {
    Bounty.find((err, bounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})
.post((req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedBounty)
    })

})


bounty.route("/:bountyId")

.get((req, res, next) => {
    Bounty.findOne({_id: req.params.bountyId}, (err, bounty) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})


.delete((req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedbounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("Deleted Item")
    })
})

.put((req, res, next) =>{
    Bounty.findOneAndUpdate({_id: req.params.bountyId}, req.body, {new: true}, (err, updatedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(201).send(updatedBounty)
    })
})

bounty.route("/search/FirstName")

.get((req, res, next) => {
    Bounty.find({FirstName: req.query.FirstName}, (err, bounty) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(bounty)
    })
})


module.exports = bounty
