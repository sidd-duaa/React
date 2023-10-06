import React from 'react';
import Expense from './expense';

const ExpenseList = (props) => {
  console.log(props.expenseList);
  return (
    <div>
      {props.expenseList.length === 0 && <h3>No Expense Found!</h3>}
      <ul>
        {props.expenseList &&
          props.expenseList.length > 0 &&
          props.expenseList.map((data) => (
            <Expense key={data.title} expense={data} />
          ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
