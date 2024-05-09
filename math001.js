function multiplyNumber () {
    event.preventDefault()
    // Pulls the number types from the HTML file
    let num1 = parseFloat(document.getElementById("number1").value)
    let num2 = parseFloat(document.getElementById("number2").value)

    //let productResult = parseFloat(num1 * num2)

    // Prints out the result 
    document.getElementById("result").innerHTML = num1 * num2
    console.log(result)
    //document.innerHTML = `<p style="color: green"> The product of ${num1} and ${num2} is ${productResult}.</p>`
    //console.log(productResult)
}