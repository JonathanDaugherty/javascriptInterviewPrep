function evenNumbers() {
    let number1 = $("#number1").val();
    let number2 = $("#number2").val();
    let addedNumber = parseInt(number1) + parseInt(number2);
    var numbers = [];

    for (let i = 1; i <= addedNumber; i++) {
        if (i % 2 == 0) {
            numbers.push(i);
        }
    }

    console.log(numbers);

}