const button = document.querySelector('#calc')

button.addEventListener('click', function () {
    let weight = document.querySelector('#weight').value
    let height = document.querySelector('#height').value

    let BMI = weight/((height/100) * (height/100))

    if (BMI < 18.5) {
      result = 'Underweight'
    }
    if (BMI >= 18.5 && BMI < 25) {
      result = 'Healthy'
    }
    if (BMI >= 25 && BMI < 30) {
      result = 'Overweight'
    }
    if (BMI >= 30) {
      result = 'Obese'
    }
    let show = BMI.toFixed(2)
    document.querySelector('#show').innerHTML = show

    let Result = 'You are ' + result

    document.querySelector('#result').innerHTML = Result
})

function calculate() {
    if(age.value=='' || height.value=='' || weight.value==''){
        alert("All fields are required")
        document.querySelector('#result').style.display = 'none'
    }
}