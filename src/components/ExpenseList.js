import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList(props) {
  return (
    <ul className="expense-list">
      {props.expenses.map(expense =>
        <li key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </li>
      )}
    </ul>
  );
}

export default ExpenseList;