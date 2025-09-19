import { useState } from "react";
import type { Expense } from "../types";
import ExpenseItem from "./ExpenseItem";
import ExpenseAdd from "../components/ExpenseAdd";

interface HomePageProps {
    title?: string;
}

function HomePage({ title = "Expense Tracker" }: HomePageProps) {
    // useState hook pour gérer les expenses
    const [expenses, setExpenses] = useState<Expense[]>([
        {
            id: "1",
            date: "2025-01-16",
            description: "Groceries at Whole Foods",
            payer: "Alice",
            amount: 45.50
        },
        {
            id: "2", 
            date: "2025-01-15",
            description: "Lunch at Italian restaurant",
            payer: "Bob",
            amount: 32.75
        },
        {
            id: "3",
            date: "2025-01-14", 
            description: "Gas for road trip",
            payer: "Charlie",
            amount: 60.00
        }
    ]);

    // Fonction pour ajouter une nouvelle expense
    const handleAdd = (newExpense: Expense) => {
        setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    };

    return (
        <div className="home-page">
            <h1>{title}</h1>
            
            {/* Composant pour ajouter une nouvelle expense */}
            <div className="add-expense-section" style={{ marginBottom: '20px' }}>
                <ExpenseAdd handleAdd={handleAdd} />
            </div>
            
            <div className="expenses-list">
                {expenses.map(expense => (
                    <ExpenseItem 
                        key={expense.id}
                        expense={expense}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;