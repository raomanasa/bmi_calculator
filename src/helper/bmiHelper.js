export const calculateBmi = (weight,height) => {
    const bmiValue = ((weight /(height* height))*10000).toFixed(2);
    const bmiMessage = setBMIMessage(bmiValue);
    const bmiImperial = (703 * weight / [(height *height)]).toFixed(2);
    const bmiImpMessage=setBMIMessage(bmiImperial);
    return [bmiValue, bmiMessage,bmiImperial,bmiImpMessage];
};


const setBMIMessage = finalBMI => {
    if(finalBMI < 18.5) {
        return "Underweight";
    }
    if(finalBMI > 18.5 && finalBMI <25){
        return "Normal";
    }
    if(finalBMI >25 && finalBMI <30){
    return "Overweight";
    }
    if(finalBMI >30){
        return "Obese"
    }
};
