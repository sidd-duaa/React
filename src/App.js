// import React, { useState } from 'react';
// import A from './components/a';

// const App = () => {
//   const [state, setState] = useState(true);

//   setTimeout(() => {
//     setState(false);
//   }, 2000);

//   if (state) {
//     return <h1>Loading...</h1>;
//   }
//   return (
//     <>
//       <h1>Hello</h1>
//       <A />
//     </>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState(0);

//   const incrementHandler = () => {
//     // setCount((count += 1));
//     // setCount((count += 1));
//     setCount((prevCount) => prevCount + 1);
//     setCount((prevCount) => prevCount + 1);
//     setCount((prevCount) => prevCount + 1);
//   };

//   const decrementHandler = () => {
//     setCount((prevCount) => prevCount - 1);
//     setCount((prevCount) => prevCount - 1);
//     setCount((prevCount) => prevCount - 1);
//   };

//   return (
//     <>
//       <button onClick={incrementHandler}>+</button>
//       <h1>{count}</h1>
//       <button onClick={decrementHandler}>-</button>
//     </>
//   );
// };

import React, { useState } from 'react';
import DefaultLayout from './components/layout/defaultLayout';
import ExpenseForm from './components/features/addexpense';
import ExpenseList from './components/features/expenselist';

const expenses = [
  {
    title: 'Expense 01',
    price: 233,
    date: '2001-01-23',
  },
  {
    title: 'Expense 02',
    price: 455,
    date: '2021-03-03',
  },
  {
    title: 'Expense 03',
    price: 862,
    date: '2012-10-02',
  },
];

const App = () => {
  const [expenseLists, setExpenseLists] = useState(expenses);

  const addExpenseListHandler = (newExpense) => {
    setExpenseLists((prevState) => [newExpense, ...prevState]);
  };
  return (
    <div>
      <DefaultLayout>
        <ExpenseForm onExpenseAdd={addExpenseListHandler} />
        <ExpenseList expenseList={expenses} />
      </DefaultLayout>
    </div>
  );
};

export default App;

// export default App;
