// This BMI Calculator uses the Math.pow function to return the base to the exponent power and the Math.round function to round the outcome to the nearest whole number.

function bmiCalculator(weight, height) {
    var bmi = weight / (Math.pow(height, 2));
    return Math.round(bmi);
}

bmiCalculator(72, 1.75);
