import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-description">
        <h2>{props.title}</h2>
        <p className="expense-description__price">${props.amount}</p>
      </div>
    </Card>
  );
}
  
export default ExpenseItem;