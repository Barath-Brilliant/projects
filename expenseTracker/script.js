// To get the current date details
const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const day = date.getDate();

// Update the header with the current year
document.querySelector('.header').textContent = `Expense Tracker - ${year}`;