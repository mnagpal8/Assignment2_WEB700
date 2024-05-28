class Data {
  constructor(students, courses) {
      this.students = students;
      this.courses = courses;
  }
}

let dataCollection = null;

exports.initialize = () => {
  return new Promise((resolve, reject) => {
      const fs = require('fs');

      fs.readFile('./data/students.json', 'utf8', (err, studentsData) => {
          if (err) {
              reject("Unable to read students.json");
              return;
          }

          fs.readFile('./data/courses.json', 'utf8', (err, coursesData) => {
              if (err) {
                  reject("Unable to read courses.json");
                  return;
              }

              const students = JSON.parse(studentsData);
              const courses = JSON.parse(coursesData);

              dataCollection = new Data(students, courses);
              resolve();
          });
      });
  });
};

exports.getAllStudents = () => {
  return new Promise((resolve, reject) => {
      if (dataCollection.students.length === 0) {
          reject("No results returned");
      } else {
          resolve(dataCollection.students);
      }
  });
};

exports.getTAs = () => {
  return new Promise((resolve, reject) => {
      const tas = dataCollection.students.filter(student => student.TA);
      if (tas.length === 0) {
          reject("No results returned");
      } else {
          resolve(tas);
      }
  });
};

exports.getCourses = () => {
  return new Promise((resolve, reject) => {
      if (dataCollection.courses.length === 0) {
          reject("No results returned");
      } else {
          resolve(dataCollection.courses);
      }
  });
};

