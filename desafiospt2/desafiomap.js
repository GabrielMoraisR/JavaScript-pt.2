const listvip = [
    {name:"Gabriel", vip: true}, 
    {name:"Renata", vip: false}, 
    {name:"leandro", vip: false}, 
    {name:"Ademir", vip: true}, 
    {name:"Marielza", vip: true}, 
    {name:"Rafaela", vip: false}, 
    {name:"Milena", vip: true}, 
    {name:"Andrea", vip: false}, 
]

let listvipresult = listvip.map((list) => { 

    let vipresult = {
        name: list.name,
        vip: list.vip,
        sector: list.vip ? "Black" : "Green"
    }

    return vipresult
})
console.log(listvipresult)


const students = [
    {name:"Gabriel", testGrade: 10}, 
    {name:"Renata", testGrade: 9}, 
    {name:"leandro", testGrade: 8}, 
    {name:"Ademir", testGrade: 7}, 
    {name:"Marielza", testGrade: 6}, 
    {name:"Rafaela", testGrade: 4}, 
    {name:"Milena", testGrade: 3}, 
    {name:"Andrea", testGrade: 1}, 
]

const resultStudents = students.map (student => {
    let approvedOrNot


    if(student.testGrade >= 7){
        approvedOrNot = 'Approved'
    }else{
        approvedOrNot = 'Disapproved'
    }
    const students = {
        name: student.name,
        finalResult: approvedOrNot
    }

    return students
})

console.log(resultStudents)