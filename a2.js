/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Mukul Nagpal            Student ID: 147813232                Date: 28th May, 2024
*
********************************************************************************/ 

// const collegeData = require('./modules/collegeData');

// collegeData.initialize()

//   .then(() => {
//     //console.log('Initialization successful');
//     return collegeData.getAllStudents();
//   })

//   .then(students => {
//     console.log(`Successfully retrieved ${students.length} students`);
//     return collegeData.getCourses();
//   })

//   .then(courses => {
//     console.log(`Successfully retrieved ${courses.length} courses`);
//     return collegeData.getTAs();
//   })

//   .then(tas => {
//     console.log(`Successfully retrieved ${tas.length} TAs`);
//   })

//   .catch(err => {
//     console.error(err);
//   });

const collegeData = require('./modules/collegeData');

collegeData.initialize()
.then(() => {
    // console.log("Successfully initialized data");

    return collegeData.getAllStudents();
})
.then((students) => {
    console.log(`Successfully retrieved ${students.length} students`);[26]

    return collegeData.getCourses();
})
.then((courses) => {
    console.log(`Successfully retrieved ${courses.length} courses`);[27]

    return collegeData.getTAs();
})
.then((tas) => {
    console.log(`Successfully retrieved ${tas.length} TAs`);[28]
})
.catch((error) => {
    console.error(error);
});
