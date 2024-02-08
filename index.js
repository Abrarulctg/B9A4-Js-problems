
function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const guardSalary = 500;
    const staffCost = 8 * 50;

    if (ticketSale < 0) {
        return "Please provide a positive number";
    }

    const incomeFromTicketSale = ticketSale * ticketPrice;
    const totalCost = guardSalary + staffCost;

    const totalRemainingIncome = incomeFromTicketSale - totalCost;
    return totalRemainingIncome;
}


function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid"
    }
    else {
        let newName = [];
        for (const string of name) {
            const lowerString = string.toLowerCase();
            newName.unshift(lowerString);
        }
        if (newName[0] === 'a' || newName[0] === 'e' || newName[0] === 'i' || newName[0] === 'o' || newName[0] === 'u' || newName[0] === 'y' || newName[0] === 'w') {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }
    }
}


function deleteInvalids(array) {
    let newArray = [];
    if (Array.isArray(array) === true) {
        for (const arr of array) {
            if (typeof arr === 'number' && !isNaN(arr)) {
                newArray.push(arr);
            }
        }
        return newArray;
    }
    else {
        return "Please provide an array";

    }
}


function password(object) {
    const objectKeys = Object.keys(object);

    let birthYear1 = (object.birthYear);
    let strBirthYear = birthYear1.toString();

    if (objectKeys.length !== 3 || strBirthYear.length !== 4) {
        return "invalid";
    }
    else {
        const password = object.siteName + "#" + object.name + "@" + object.birthYear;
        return password;
    }
}



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