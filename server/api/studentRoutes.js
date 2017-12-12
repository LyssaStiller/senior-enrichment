var express = require('express')
var router = express.Router()
var db = require('../db/models').db
var Students = require('../db/models').Students


//want the router to specify /api/students

router.get("/", (req,res,next) => {
  //console.log("I am here")
  Students.findAll()
  .then((allTheStudents) => {
    res.json(allTheStudents)
  })
  .catch(next)
})

router.get("/:id", (req,res,next) => {
  Students.findById(req.params.id, {include: [{all: true}]})
  .then((specificStudent) => {
    res.json(specificStudent)
  })
  .catch(next)
})

//REMOVED THE INCLUDE
//THIS WORKS
router.post("/", (req,res,next) => {
  Students.create(req.body)
  .then((createdStudent) =>{
    return Students.findById(createdStudent.id)
  })
  .then((loadedStudent) => {
    res.json({
      message: "Student Added",
      student: loadedStudent})
  })
  .catch(next)
})

//THIS WORKS
router.put("/:id", (req,res,next) => {
  return Students.findById(req.params.id)
  .then(function(student){
    if(!student) {
      var err = new Error("student wasn't found")
      err.status(404)
      throw err
    }
    return student.update(req.body)
  })
  .then((updatedStudent) => {
    res.json({
      message: "updated successfull", student: updatedStudent
    })
  })
  .catch(next)
})

//WORKS
router.delete("/:id", (req,res,next) => {
  Students.findById(req.params.id)
  .then((student) => {
    student.destroy()
  })
  .then(() => {
    res.send("Student " + req.params.id + " was removed from campus")
  })
  .catch(next)
})

module.exports = router
