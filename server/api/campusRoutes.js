var express = require('express')
var router = express.Router()
var db = require('../db/models').db
var Campuses = require('../db/models').Campuses

//routes starting with api/campuses
router.get("/", (req,res,next) => {
  Campuses.findAll()
  .then((allTheCampuses) => {
    res.json(allTheCampuses)
  })
  .catch(next)
})

router.get("/:id", (req,res,next) => {
  Campuses.findById(req.params.id)
  .then((specificCampus) => {
    res.json(specificCampus)
  })
  .catch(next)
})

router.post("/", (req,res,next) => {
  Campuses.create(req.body)
  .then((createdCampus) =>{
    res.json(createdCampus)
  })
  .catch(next)
})

router.put(":/id", (req,res,next) => {
  Campuses.findById(req.params.id)
  .then((campus) => {
    return campus.update(req.body)
  })
  .then((updatedCampus) => {
    res.json(updatedCampus)
  })
  .catch(next)
})

router.delete(":/id", (req,res,next) => {
  Campuses.findById(req.params.id)
  .then((campus) => {
    campus.destroy()
  })
  .then(() => {
    res.send("Campus Removed")
  })
  .catch(next)
})

module.exports = router
