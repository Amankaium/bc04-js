document.addEventListener("DOMContentLoaded", myFunction)

function myFunction () {
    // console.log('hi')
    // html elements
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const plus_button = document.getElementsByTagName("button")[0]
    const minus_button = document.getElementsByTagName("button")[1]
    const mult_button = document.getElementsByTagName("button")[2]
    const divide_button = document.getElementsByTagName("button")[3]
    const result = document.getElementById("res")

    // вешаем слушатели
    plus_button.addEventListener("click", mySum)
    minus_button.addEventListener("click", myMinus)
    // mult_button.addEventListener("click", myMult)
    // divide_button.addEventListener("click", myDivide)
    
    function mySum() {
        // console.log('call mySum')
        const value1 = Number(num1.value)
        const value2 = Number(num2.value)
        // console.log(sm)
        result.textContent = value1 + value2     
    }

    function myMinus() {
        const value1 = Number(num1.value) 
        const value2 = Number(num2.value) 
        let res = value1 - value2   
        result.textContent = res
    }
}
