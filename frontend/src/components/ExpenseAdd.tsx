import type { Expense } from '../types';

interface ExpenseAddProps {
  handleAdd: (expense: Expense) => void;
}

function ExpenseAdd({ handleAdd }: ExpenseAddProps) {
  const onAdd = () => {
    // Générer un payeur aléatoire entre Alice et Bob
    const payers = ['Alice', 'Bob'];
    const randomPayer = payers[Math.floor(Math.random() * payers.length)];
    
    // Générer un montant entre 0 et 100 avec maximum 2 décimales
    const randomAmount = Math.round((Math.random() * 100) * 100) / 100;
    
    // Créer une nouvelle expense
    const newExpense: Expense = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0], // Format YYYY-MM-DD
      description: `Random expense by ${randomPayer}`,
      payer: randomPayer,
      amount: randomAmount
    };
    
    // Appeler la fonction handleAdd passée en props
    handleAdd(newExpense);
  };

  return (
    <div className="expense-add">
      <button 
        onClick={onAdd}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        Add
      </button>
    </div>
  );
}

export default ExpenseAdd;
