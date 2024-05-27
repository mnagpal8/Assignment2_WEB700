/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Sujan Acharya              Student ID: 152904231                 Date: 21 May, 2024
*
********************************************************************************/ 

const collegeData = require('./modules/collegeData');

collegeData.initialize()

  .then(() => {
    //console.log('Initialization successful');
    return collegeData.getAllStudents();
  })

  .then(students => {
    console.log(`Successfully retrieved ${students.length} students`);
    return collegeData.getCourses();
  })

  .then(courses => {
    console.log(`Successfully retrieved ${courses.length} courses`);
    return collegeData.getTAs();
  })

  .then(tas => {
    console.log(`Successfully retrieved ${tas.length} TAs`);
  })

  .catch(err => {
    console.error(err);
  });