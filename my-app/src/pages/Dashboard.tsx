import React, { useState } from "react";
import TransactionTable from "../components/TransactionTable";
import Transaction from "../types/Transaction";
import { mockTransactions as initalMockData} from "../data/mockTransactions";
import { transactionTableProps } from "../components/TransactionTable";

// const[mockTransactions, setMockTransactions] = useState([]);

{/*since my function is jus returning mocktransactions, and isnt editing the number
    i dont need a hook
    }interface dashBoardProps{
//     mockTransactions : Transaction[];
//     setMockTransactions:
// */}

const Dashboard = ({mockTransactions} : transactionTableProps) =>{
    return (
        <div className = "mainDashBoard">
            <section>
                <h1>FraudWatch</h1>
                <h3>Fraud Watch Monitoring</h3>
            </section>
            <section>
                <TransactionTable mockTransactions={mockTransactions}/>
            </section>
          
        </div>
    );
}


export default Dashboard;