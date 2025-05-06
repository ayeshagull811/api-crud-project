const students=[
    {
        name:"Alice",
        grades:[
           80,90,75,60
        ]
    },
    {
        name:"Bob",
        grades:[
            50,65,80,70
        ]
    },
    {
       name:"Charlie",
       grades:[
        95,85,92,88
       ]
    },
    {
        name:"David",
        grades:[
            60,70,65,55
        ]
    },

]
let result=[];
for(let i=0 ; i<students.length ; i++){
let student = students[i];
let gradessum=0;
for(let j=0 ; j<student.grades.length ;j++){
    gradessum+= student.grades[j];
}
let averagegrades= gradessum/student.grades.length;
student.avgOfGrades=averagegrades;
if(averagegrades>=70)
    {
    result.push(student);
}

}
console.log(result)