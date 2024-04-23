function leapYear(year) {
    let answer;
    if (year % 4 === 0) {
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            answer = true;
        } else {
            answer = false;
        }
    } else {
            answer = false;
    }
return answer
}