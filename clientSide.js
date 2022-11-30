function evenNumbers() {
    let number1 = $("#number1").val();
    let number2 = $("#number2").val();
    let addedNumber = parseInt(number1) + parseInt(number2);
    var numbers = [];

    if (number1 == '' || number2 == '') {
        alert('Please input two numbers!')
        return;
    }

    for (let i = 1; i <= addedNumber; i++) {
        if (i % 2 == 0) {
            numbers.push(i);
        }
    }

    console.log(numbers);

    const initialValue = 0;
    const sumWithInitial = numbers.reduce((a, b) => a + b, 0);
    console.log(sumWithInitial);

    document.getElementById("listofE").style.display = "inline-block";
    document.getElementById("answer1").style.display = "inline-block";

    document.getElementById("listofE").innerHTML = numbers;
    document.getElementById("answer1").innerHTML = sumWithInitial;

}

function hideValues() {
    document.getElementById("listofE").style.display = "none";
    document.getElementById("answer1").style.display = "none";
}

function checkPalindrome() {
    var pWord = document.getElementById("pWord").value;
    var rpWord = [];

    if (pWord < 2) {
        alert("Please input more than one letter!");
        return;
    }

    for (let i = 0; i < pWord.length; i++) {
        rpWord.push(pWord[i]);
    }

    var rpWord2 = rpWord.reverse().join('');

    if (rpWord2 == pWord) {
        document.getElementById("yPal").style.display = "inline-block";
        document.getElementById("nPal").style.display = "none";
        document.getElementById("pWordresult1").innerHTML = rpWord2;
    } else {
        document.getElementById("nPal").style.display = "inline-block";
        document.getElementById("yPal").style.display = "none";
        document.getElementById("pWordresult2").innerHTML = rpWord2;
    }
}

function onPChange() {
    document.getElementById("pWordresult1").innerHTML = '';
    document.getElementById("pWordresult2").innerHTML = '';
    document.getElementById("yPal").style.display = "none";
    document.getElementById("nPal").style.display = "none";
}