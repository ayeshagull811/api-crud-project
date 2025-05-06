const students=[
    {
        name:"Liam",
        grades:{
             math:90,
             english:85,
             science:92
        }
    },
    {
        name:"Oliva",
        grades:{
            math:88,
            english:91,
            science:79
        }
    }
]
for (let i of students) {
    console.log(i.name)
    let grade= i.grades
    for (const k in grade) {
        console.log(k + ":" + grade[k]);
}
}