import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <>
      <ExpenseDate date={props.date}/>
      <div className="expense-description">
        <h2>{props.title}</h2>
        <div className="expense-description__price">${props.amount}</div>
      </div>
    </>
  );
}
  
export default ExpenseItem;