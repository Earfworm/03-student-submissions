"use strict";

//1. 
const submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2020-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    },
]

//2.
const addSubmission = (array, newName, newScore, newDate) => {
    let newPassed = null;
    if (newScore >= 60) {
        newPassed = true;
    } else {
        newPassed = false;
  }
    const studentInfo = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newPassed
    }
    array.push(studentInfo);
}

addSubmission(submissions, "James", 100, "2022-10-05")

console.log(submissions);



//3. 
const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
}

deleteSubmissionByIndex(submissions, 0);
console.log(submissions);

//4. 
const deleteSubmissionByName = (array, name) => {
    const foundIndex = array.findIndex((index) => {
        return index.name === name;
    });
    if (foundIndex !== -1) {
        array.splice(foundIndex, 1);
    } else {
        console.log(`${name} not found!!!`);
    }
};

deleteSubmissionByName(submissions, "Deshawn");
deleteSubmissionByName(submissions, "Jack");
console.log(submissions);

//5. no array method is needed.

const editSubmission = (array, index, score) => {

    if (score >= 60) {
        array[index].passed = true;
        array[index].score = score;
    } else {
        array[index].passed = false;
        array[index].score = score;
}
}

editSubmission(submissions, 0, 3);
editSubmission(submissions, 1, 66);
console.log(submissions)

//6.

const findSubmissionByName = (array, name) => {
   const foundName = array.find((item) => {
        return item.name === name;
    }); 
    if (foundName) {
        console.log(name);
    } else {
        console.log(`${name} not found`);
    }
}

findSubmissionByName(submissions, "DeShawn");
findSubmissionByName(submissions, "Joe");
findSubmissionByName(submissions, "Mack");
findSubmissionByName(submissions, "James");
console.log(submissions);

//7.
const findLowestScore = (array) => {
  
   
}

console.log(findLowestScore(submissions));
