function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if(score >= 100 || score < 0 ) 
    return 'INVALID SCORE';
    if (score <= 59) {
        return 'F';
        } else if (score <= 69) {
        if(score <= 62) {
        return 'D-';
        } else if (score >= 68) {
        return 'D+';
        } else {
        return 'D';
        }
        } else if (score <= 79) {
        if(score <= 72) {
        return 'C-';
        } else if (score >= 78) {
        return 'C+';
        } else {
        return 'C';
        }
        } else if (score <= 89) {
        if(score <= 82) {
        return 'B-';
        } else if (score >= 88) {
        return 'B+';
        } else {
        return 'B';
        }
        } else if (score <= 100) {
        if(score <= 92) {
        return 'A-';
        } else if (score >= 98) {
        return 'A+';
        } else {
        return 'A';
        }
        }
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'