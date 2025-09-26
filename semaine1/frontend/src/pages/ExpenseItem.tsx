import type { Expense } from '../types';
import './ExpenseItem.css';

interface ExpenseItemProps {
  expense: Expense;
}

function ExpenseItem({ expense }: ExpenseItemProps) {
  return (
    <div className="expense-item">
      <div className="expense-header">
        <h3>{expense.description}</h3>
        <span className="expense-amount">
          ${expense.amount.toFixed(2)}
        </span>
      </div>
      
      <div className="expense-details">
        <span>Paid by: <strong>{expense.payer}</strong></span>
        <span>Date: {new Date(expense.date).toLocaleDateString()}</span>
      </div>
      
      <div className="expense-id">
        ID: {expense.id}
      </div>
    </div>
  );
}

export default ExpenseItem;

