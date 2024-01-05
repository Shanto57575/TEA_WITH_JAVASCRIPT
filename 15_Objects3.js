// destructuring in Objects

const course = {
    courseName: "JS in Bangla",
    price: "999",
    courseInstructor: "Shanto"
}

const { courseInstructor: instructor } = course;

console.log(instructor);

// JSON : js object notation