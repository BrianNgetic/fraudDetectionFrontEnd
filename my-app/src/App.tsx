import { useState} from 'react';

import { Routes, Route } from 'react-router-dom';


import Hello from  "./components/Hello"
import Dashboard from "./pages/Dashboard"
import { NavBar } from './components/NavBar';
import Sidebar from './components/Sidebar';
import Transaction from './types/Transaction';
import Alert from './pages/Alert';
import Transactions from "./pages/Transactions"
import { mockTransactions as initialMockData, mockTransactions} from "./data/mockTransactions"


import  "./App.css"
import { AddLink } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const[mockTransactions, setMockTransactions] = useState<Transaction[]>([]);
  return (
    <>
      <div className = "mainContainer">
        < NavBar/>
        <div className='mainContent'>
            <Sidebar />
            <main>
                 <Routes>
                    <Route path = "/" element = {<Dashboard mockTransactions={initialMockData}/>} />
                    <Route path = "/pages/DashBoard" element = {<Dashboard mockTransactions={initialMockData}/>} />
                    <Route path = "/pages/Transactions" element = {<Transactions />} />
                    <Route path = "/pages/Alert" element = {<Alert/>} />
                  </Routes>
            </main>
            {/* <Dashboard mockTransactions={initialMockData} /> */}
        </div>
      </div>
     
    </>
 

 
   
  );
}

export default App;
