function BMI() {
    const height = parseFloat(prompt("Enter your height in centimeters:"));
    const weight = parseFloat(prompt("Enter your weight in kilograms:"));

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }

    const bmi = calculateBMIValue(height, weight);
    const category = getBMICategory(bmi);

    alert(`Your BMI is ${bmi.toFixed(2)}. You are ${category}.`);
}

function calculateBMIValue(height, weight) {
    return weight / ((height / 100) ** 2);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

    function subscribeNewsletter() {
        var email = document.getElementById("email").value;
        alert("Thank you for subscribing to our newsletter, " + email + "!");
        // You can send the email to a server for processing here
    }

    function submitContactForm() {
        // Validate form fields and perform submission
        // You can add your validation logic and submission code here
        alert('Contact form submitted successfully!');
    }

    function login(){
        alert('Logged in successfully!');
    }

    function signup(){
        alert('Signup is successfull');
    }

    function LearnMore(){
        let btn = document.getElementById('btn');
        let para = document.getElementById('para');

        if(para.style.display != 'none')
        {
            para.style.display= 'none';
        }
        else{
            para.style.display= 'block';
        }
    }
