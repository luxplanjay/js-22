import transactionHistory from './data/transactions.js';

const makeTransactionTableRowMarkup = transaction => {
  const { id, amount, date, business, type, name, account } = transaction;

  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
};

console.log(transactionHistory);
const tableEl = document.querySelector('.js-transaction-table');
const transactionTableRowsMarkup = transactionHistory
  .map(makeTransactionTableRowMarkup)
  .join('');

tableEl.insertAdjacentHTML('beforeend', transactionTableRowsMarkup);

console.log(transactionTableRowsMarkup);
