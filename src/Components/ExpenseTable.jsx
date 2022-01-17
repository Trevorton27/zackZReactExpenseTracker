import React from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';

const ExpenseTable = ({ expenseList }) => {
    const YourDeleteFunction = () => {
        //write your delete logic here
    }
  return (
    <div name='table' className='table-container'>
      <Table>
        <thead>
          <tr>
            <th>Expense Date</th>
            <th>Expense Amount</th>
            <th>Expense Description</th>
            <th>Expense Location</th>
            <th>Payment Method</th>
            <th>Delete Expense</th>
          </tr>
        </thead>
        <tbody>
            {expenseList.map(expense => {
                return (
                    <tr key={expense.id}>
                    <td>{expense.description}</td> 
                    <td>{expense.currency}</td>{' '}
                    <td>${expense.amount}</td> 
                    <td>{expense.location}</td>{' '}
                    <td>{expense.date}</td> 
                    <td>
                        <button onClick={YourDeleteFunction}>
                            Delete
                        </button>
                        </td>{' '}
                  </tr>
                )
            })}
       
        </tbody>
      </Table>
    </div>
  );
};

export default ExpenseTable;
