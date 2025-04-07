import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Expense } from './models/expense.model';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'untitled-angular-project';

  expenses: Expense[] = [];

  handleAddExpense(expense: Omit<Expense, 'id'>) {
    const newExpense: Expense = {
      ...expense,
      id: uuidv4(), 
    };
    this.expenses.push(newExpense);
  }

  handleDeleteExpense(id: string) {
    this.expenses = this.expenses.filter(e => e.id !== id);
  }
 
}
