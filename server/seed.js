const db = require('./db/models').db
const Campuses = require('./db/models').Campuses
const Students = require('./db/models').Students

  db.sync({force: true})
  .then(() => {
      return Campuses.bulkCreate([
          {name: "Data and Data Structures", imageUrl:
          "https://cdn-images-1.medium.com/max/1024/0*I5vtdhUqmRJ1zI1e.jpg" , text: "Populate a world you made yourself"},
          {name: "Backend Development", imageUrl:"https://www.ciklum.com/wp-content/uploads/2016/02/full_scale238-1.jpg", text: 'Make it all connect'},
          {name: "Whimsical Stylings of CSS", imageUrl: "http://d1gtq9mqg5x3oe.cloudfront.net/images/spcs/noncredit/areas/arts-design-interior/digital-design/hero/digital-design-hero-720x240.jpg", text: 'Make stuff look cool'}
      ])
  })
  .then((campusesMade) => {
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
  .then((studentsMade) => {
      console.log("seed successful!")
      db.close()
  })
  .catch(err => {
      console.error('Something is amiss')
      console.error(err.message)
      console.error(err.stack)
      db.close()
  })

