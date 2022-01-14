import {Header} from './components/Header';
import './App.css';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTxn } from './components/AddTxn';
import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTxn />
      </div>
      </GlobalProvider>
    
  );
}

export default App;
