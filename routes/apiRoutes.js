const router = require('express').Router();
const Workout = require('../models/Workout')

router.get('/workouts', (req,res)=>{
    //return all the workouts to frontend
    Workout.find().then(data=> res.json(data)).catch(err=> console.log(err))
});

router.post("/workouts", (req,res)=>{
    Workout.create({}).then(data=> res.json(data))
})

router.put("/workouts/:id", (req,res)=>{
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}).then(data=> res.json(ImageData))
})

router.get('/workouts/range', (req,res)=>{
    Workout.find().then(data=> res.json(data)).catch(err=> console.log(err))
})
module.exports = router;