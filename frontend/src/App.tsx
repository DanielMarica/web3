
import './App.css'
import HomePage from './pages/homePage';

function App() {
  return (
    <div className="app-container">
      <h1>Web3 2025 - Expense Sharing App</h1>
      
      <div className="expenses-section" style={{ marginTop: '30px' }}>
        <HomePage />
      </div>
    </div>
  );
}

export default App
