const router = require('express').Router();
const registercurd = require('../models/registerM')




router.get("/",async function(req,res){
    await registercurd.create(req.query)
    res.send("Register Successfully!")
})
router.get("/record",async function(req,res){
    var registerrstd = await registercurd.find()
    res.json(registerrstd)
})
router.put("/",async function(req,res){
    await registercurd.findByIdAndUpdate(req.query.id,{$set:req.body})
    res.send("Updated Successfully!")
})


module.exports = router