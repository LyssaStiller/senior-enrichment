const db = require('./db/models').db
const Campuses = require('./db/models').Campuses
const Students = require('./db/models').Students

  db.sync({force: true})
  .then(() => {
      return Campuses.bulkCreate([
          {name: "Data and Data Structures", img: null , text: 'Learn about data'},
          {name: "Backend Development", img: null, text: 'Make it all connect'},
          {name: "Whimsical Stylings of CSS", img: null, text: 'Learn to make stuff look cool'}
      ])
  })
  .then(() => {
      return Students.bulkCreate([
          {
          firstName: "Annabel",
          lastName: "Lau" ,
          email: "aLau@DJBellezio.com",
          gpa: 4.0,
          campusId: 1
          },
          {
          firstName: "Jasmina",
          lastName: "Absurita",
          email: "jabsurita@gmail.com",
          gpa: 3.0,
          campusId: 1
          },
          {
          firstName: "Sierra",
          lastName: "Saitta",
          email: "ssaitta@gmail.com",
          gpa: 4.0,
          campusId: 1
          },
          {
          firstName: "Ann",
          lastName: "Layman",
          email:"aLayman@gmail.com",
          gpa: 3.0,
          campusId: 2
          },
          {
          firstName: "Sarah Rose",
          lastName: "Gallangher",
          email: "sarahRose@gmail.com",
          gpa: 4.0,
          campusId: 2
          },
          {
          firstName: "Oczane",
          lastName: "Rivera",
          email: "orivera@gmail.com",
          gpa: 2.0,
          campusId: 3
          },
          {
          firstName: "Leah",
          lastName: "Gerald",
          email: "lgerald@gmail.com",
          gpa: 4.0,
          campusId: 3
          },
      ])
  })
  .then(() => {
      console.log("seed successful!")
      db.close()
  })
  .catch(err => {
      console.error('Something is amiss')
      console.error(err.message)
      console.error(err.stack)
      db.close()
  })

