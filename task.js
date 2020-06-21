String.prototype.isPalindrome = function() {
    let arrLowerCase = this.toString().replace(/ /g, "").toLowerCase().split("");
    console.log(arrLowerCase);
    let result = true;
    for (let i = 0; i < arrLowerCase.length; i++) {
        if (arrLowerCase[i] !== arrLowerCase[arrLowerCase.length - 1 - i]) {
            result = false;
            break;
        }
    }
    return result;
}

function getAverageMark(marks) {
    let average;
    let roundedAverage;
    if (marks.length === 0) {
        roundedAverage = 0;
        return roundedAverage;
    } else {
        let sumMark = 0;
        for (let mark in marks) {
            sumMark += marks[mark];
        }
        average = sumMark / marks.length;
        roundedAverage = Math.round(average);
        return roundedAverage;
    }
}

function checkBirthday(birthday) {
    let now = new Date();
    let dateOfBirthday = new Date(birthday);
    let diff = now.getTime() - dateOfBirthday.getTime();
    
    let age = diff / 31557600000;
    console.log(age);
    if (age >= 18) {
        return true;
    } else if (age < 18) {
        return false;
    }
}
