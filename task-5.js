function monthlySavings(array, livingCost) {
    let totalEarning = array;
    if (Array.isArray(totalEarning) === true && typeof livingCost === 'number') {
        let sumOfEarning = 0;
        for (let singleEarning of totalEarning) {
            if (singleEarning >= 3000) {
                const tax = singleEarning * (20 / 100);
                const remainingArr = singleEarning - tax;
                singleEarning = remainingArr;
            }
            sumOfEarning = sumOfEarning + singleEarning;
        }
        const totalSavings = sumOfEarning - livingCost;
        if (totalSavings < 0) {
            return "earn more";
        }
        else {
            return totalSavings;
        }
    }
    else {
        return "invalid input";
    }
}

const res = monthlySavings([900, 2700, 3400], 500);

console.log(res)