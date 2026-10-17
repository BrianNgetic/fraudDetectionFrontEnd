import { useState} from 'react';

import Hello from  "./components/Hello"
import Dashboard from "./pages/Dashboard"
import { NavBar } from './components/NavBar';
import Sidebar from './components/Sidebar';

import Transaction from './types/Transaction';
import { mockTransactions as initialMockData, mockTransactions} from "./data/mockTransactions"




function App() {

  const[mockTransactions, setMockTransactions] = useState<Transaction[]>([]);
  return (
    <div className = "mainContainer">
      < NavBar/>
      <div className='mainContent'>
        <Sidebar />
        <Dashboard mockTransactions={initialMockData}></Dashboard>

      </div>
    
    </div>

 
   
  );
}

export default App;
