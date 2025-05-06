const users = [
  { name: "Alice", courses: ["Math", "Science", "English"] },
  { name: "Bob", courses: ["Math", "Art"] },
  { name: "Charlie", courses: ["Science", "Math", "History"] },
  { name: "David", courses: ["Math", "English"] },
  { name: "Eve", courses: ["Art", "Science"] },
];

// Step 1: Count enrollments for each course
const courseCounts = {
};

for (let i = 0; i < users.length; i++) {
  const userCourses = users[i].courses;
  // console.log(userCourses);
  for (let j = 0; j < userCourses.length; j++) {
    const course = userCourses[j];
    // console.log(course);
    if (courseCounts[course]) {
      courseCounts[course]++;
     
    } else {
      courseCounts[course] = 1;
      
    }
  }
}

// Step 2: Display each course and number of enrolled students
console.log("Course Enrollments:");
for (let course in courseCounts) {
if(courseCounts[course] > 1){
  console.log(`${course}: ${courseCounts[course]} students`)
}
else{
  console.log(`${course}: ${courseCounts[course]} student`)
}

// (courseCounts[course] > 1) ? 
//   console.log(`${course}: ${courseCounts[course]} students`) : console.log(`${course}: ${courseCounts[course]} student`)
  // console.log(courseCounts )
}

// Step 3: Find the most popular course
let mostPopularCourse = "";
let highestCount = 0;

for (let course in courseCounts) {
 
  if (courseCounts[course] > highestCount) {
    highestCount = courseCounts[course];
    mostPopularCourse = course;
  }
}

console.log(`\nMost popular course: ${mostPopularCourse} (${highestCount} students)`
);
