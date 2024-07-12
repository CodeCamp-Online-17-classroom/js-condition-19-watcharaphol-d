let score = +prompt("Please enter your score");
let grade = (score >= 80) ? "A" :
    (score >= 70) ? "B" :
        (score >= 60) ? "C" :
            (score >= 50) ? "D" :
                (score >= 0) ? "F" : "Error";
alert(`Your score is ${score} \n \t Get grade ${grade}`);