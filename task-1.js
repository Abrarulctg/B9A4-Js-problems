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

const res = calculateMoney(5);
console.log(res);