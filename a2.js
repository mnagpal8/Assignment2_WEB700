/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Mukul Nagpal            Student ID: 147813232                Date: 28th May, 2024
*
********************************************************************************/ 

const collegeData = require('./modules/collegeData'); //Import the collegeData module from the specified file path

collegeData.initialize() //Call the initialize function from the collegeData module
.then(() => { //If the initialize promise is resolved

    return collegeData.getAllStudents(); //Call the getAllStudents function from the collegeDatamodule and return the promise
})
.then((students) => { //If the getAllStudents promise is resolved
    console.log(`Successfully retrieved ${students.length} students`); //Log the number of students retrieved

    return collegeData.getCourses(); //Call thegetCourses function from the collegeData module and return the promise
})
.then((courses) => { //If the getCourses'Promise is resolved
    console.log(`Successfully retrieved ${courses.length} courses`); //Log the number of courses retrieved

    return collegeData.getTAs(); //Call the getTAs function from the collegeData module and return the Promise
})
.then((tas) => { //If the getTAs promise is resolved
    console.log(`Successfully retrieved ${tas.length} TAs`); //Log the number of TAs retrieved
})
.catch((error) => { // If any of the promises is rejected
    console.error(error); // Log the error message
});
