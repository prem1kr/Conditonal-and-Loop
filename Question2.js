function determineGrade(marks) {
    let grade;

    if (marks > 90) {
        grade = "A";
    } else if (marks > 70 ) {
        grade = "B";
    } else if (marks > 50 ) {
        grade = "C";
    } else {
        grade = "F";
    }

    return grade;
}

let marks = 45;
let Grade = determineGrade(marks);

console.log(`Grade is: ${Grade}`);
