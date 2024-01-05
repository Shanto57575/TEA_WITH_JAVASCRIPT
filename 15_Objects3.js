// destructuring in Objects

const course = {
    courseName: "JS in Bangla",
    price: "999",
    courseInstructor: "Shanto"
}

const { courseInstructor: instructor } = course;
const { courseInstructor } = course;

console.log(courseInstructor, instructor); // shanto, shanto

// JSON : js object notation