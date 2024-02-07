
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
        return "Invalid"
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