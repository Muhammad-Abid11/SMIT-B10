// 1

var student = {
    name: "ABS Student ",
    age: 20,
    student_Id: 420,
}
console.log(student)

// 2

var student = {
    Student_Name: "Rehan Uddin",
    Student_Age: 20
}
if (student.age > 20) {
    console.log("You are not eligible for Module A Classes")
}

// 3

var student_One = {
    Student_Name: "Zia Khan",
    Student_ID: "J30052425300",
    Subject_HTML: 80,
    Student_CSS: 90,
    Student_JAVASCRIPT: 90,
    Student_BOOTSTRAP: 70,
    Total_Marks: 400
}

var student_Two = {
    Student_Name: "Zia Khan",
    Student_ID: "J30052425300",
    Subject_HTML: 60,
    Student_CSS: 70,
    Student_JAVASCRIPT: 65,
    Student_BOOTSTRAP: 85,
    Total_Marks: 400
}

function percentage(html, css, javascipt, bootstrap, total) {
    return percent = (html + css + javascipt + bootstrap) / total * 100;
}
var student1 = percentage(student_One.Subject_HTML, student_One.Student_CSS, student_One.Student_JAVASCRIPT, student_One.Student_BOOTSTRAP, student_One.Total_Marks)
var student2 = percentage(student_Two.Subject_HTML, student_Two.Student_CSS, student_Two.Student_JAVASCRIPT, student_Two.Student_BOOTSTRAP, student_Two.Total_Marks)
if (student1 > student2) {
    console.log("Student 1 is eligible for Scholarship")
} else {
    console.log("Student 1 is eligible for Scholarship")
}

// 4

var arr = [
    { name: 'Asher', age: 22 },
    { name: 'Zubair', age: 20 },
    { name: 'Kashif', age: 23 },
    { name: 'Wasif', age: 17 },
    { name: 'Hanzala', age: 28 }
]
// i) Replace the 3rd index with { name: 'Siddiq', age: 23 }
arr[3].name = "Siddiq"
arr[3].age = "23"
console.log(arr[3])

// ii) Push { name: 'Umair', age: '23' } from the end
arr.push({ name: 'Umair', age: '23' })
console.log(arr)

// iii) Remove the first element
arr.shift()
console.log(arr)

// iv) Add a field createdAt: new Date() with each through loop.

for (let i = 0; i < arr.length; i++) {
    arr[i].createdAt = new Date();
}
console.log(arr)


// 5


for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18 && arr[i].age < 28) {
        console.log(arr[i].name.toString())
    }
}

// 6

var students = [
    {
        _id: 'std1',
        name: 'Bill Gates',
        age: 30
    },
    {
        _id: 'std2',
        name: 'Steve Jobs',
        age: 30
    },
    {
        _id: 'std3',
        name: 'Suzanne Collins',
        age: 30
    }];

var courses = [
    {
        name: 'Maths',
        std_id: ['std3', 'std1']
    },
    {
        name: 'Computer Science',
        std_id: ['std3', 'std2']
    },
    {
        name: 'Commerce',
        std_id: ['std1']
    },
]

