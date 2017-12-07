var express = require('express')
var router = express.Router()
var db = require('../db/models').db
var Students = require('../db/models').Students


//want the router to specify /api/students

router.get("/", (req,res,next) => {
  Students.findAll()
  .then((allTheStudents) => {
    res.json(allTheStudents)
  })
  .catch(next)
})

router.get("/:id", (req,res,next) => {
  Students.findById(req.params.id)
  .then((specificStudent) => {
    res.json(specificStudent)
  })
  .catch(next)
})

router.post("/", (req,res,next) => {
  Students.create(req.body)
  .then((createdStudent) =>{
    return Students.findById(createdStudent.id, {include: [Campus]})
  })
  .then((loadedStudent) => {
    res.json(loadedStudent)
  })
  .catch(next)
})

router.put(":/id", (req,res,next) => {
  Students.findById(req.params.id)
  .then((student) => {
    return student.update(req.body)
  })
  .then((updatedStudent) => {
    res.json(updatedStudent)
  })
  .catch(next)
})

router.delete(":/id", (req,res,next) => {
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
