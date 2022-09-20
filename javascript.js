function exercise1() {
    let a = +(prompt("Enter number a"));
    let b = +(prompt("Enter number b"));
    let result = "";
    if (a % b === 0) {
        result = "a divisible by b";
    } else {
        result = "a not divisible by b";
    }
    document.getElementById("ex1_result").innerHTML = "Number a: " + a + "<br>Number b: " + b + "<br>" + result;
}

function exercise2() {
    let age = +(prompt("Enter age"));
    let result = "";
    if (age === 15 || age === 16) {
        result = "You can get in grade 10";
    } else {
        result = "You can't get in grade 10";
    }
    document.getElementById("ex2_result").innerHTML = "Your age: " + age + "<br>" + result;
}

function exercise3() {
    let a = +(prompt("Enter number a"));
    let result = "";
    if (a > 0) {
        result = "This number is larger than 0";
    } else {
        result = "This number is smaller than 0";
    }
    document.getElementById("ex3_result").innerHTML = "Number: " + a + "<br>" + result;
}

function exercise4() {
    let a1 = +(prompt("Enter number 1"));
    let a2 = +(prompt("Enter number 2"));
    let a3 = +(prompt("Enter number 3"));
    let max = a1;
    if (a2 >= max) {
        if (a2 >= a3) {
            max = a2;
        } else {
            max = a3;
        }
    } else if (a3 >= max) {
        max = a3;
    }
    document.getElementById("ex4_result").innerHTML = "Number 1: " + a1 + "<br>Number 2: " + a2 + "<br>Number 3: " + a3 + "<br>Max: " + max;
}

function exercise5() {
    let a1 = +(prompt("Enter test's score"));
    let a2 = +(prompt("Enter half-term test's score"));
    let a3 = +(prompt("Enter final test's score"));
    let rank = "";
    let avg = (a1 + a2 + a3) / 3;
    if (avg >= 8.5) {
        rank = "Very Good";
    } else if (avg >= 7) {
        rank = "Good";
    } else if (avg >= 5) {
        rank = "Normal";
    } else {
        rank = "Bad";
    }
    document.getElementById("ex5_result").innerHTML = "Test's score: " + a1 + "<br>Half-term test's score: " + a2 + "<br>Final test's score: " + a3 + "<br>Your average score: " + avg + "<br>Your rank: " + rank;
}

function exercise6() {
    let a = +(prompt("Enter your sale volume"));
    let result = "";
    if (a >= 100) {
        result = "30%"
    } else if (a >= 70) {
        result = "20%"
    } else if (a >= 50) {
        result = "10%"
    } else {
        result = "5%"
    }
    document.getElementById("ex6_result").innerHTML = "Your sale volume: " + a + "<br>Commission percent received: " + result;
}

function exercise7() {
    let min = +(prompt("Enter minutes amount used"));
    let fee = 0;
    const PRICE1 = 200;
    const PRICE2 = 220;
    const PRICE3 = 250;
    const PRICE4 = 300;
    if (min > 30) {
        fee = 10 * 200 + 10 * 220 + 10 * 250 + (min - 30) * 300;
    } else if (min > 20 && min <= 30) {
        fee = 10 * 200 + 10 * 220 + (min - 20) * 250;
    } else if (min > 10 && min <= 20) {
        fee = 10 * 200 + (min - 10) * 220;
    } else {
        fee = min * 200;
    }
    document.getElementById("ex7_result").innerHTML = "10' first: 200 per min<br>10' second: 220 per min<br>10' thrid: 250 per min<br>Larger 30': 300 per min<br>Min used: " + min + "<br>Total fee: " + fee;
}