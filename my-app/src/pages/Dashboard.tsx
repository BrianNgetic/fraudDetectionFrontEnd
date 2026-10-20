import React, { useState } from "react";
import DashboardTable from "../components/DashboardTable";
import Transaction from "../types/Transaction";
import { mockTransactions as initalMockData} from "../data/mockTransactions";
import { DashboardTableProps } from "../components/DashboardTable";
import "../components/ComponentStyling.css"

// const[mockTransactions, setMockTransactions] = useState([]);

{/*since my function is jus returning mocktransactions, and isnt editing the number
    i dont need a hook
    }interface dashBoardProps{
//     mockTransactions : Transaction[];
//     setMockTransactions:
// */}

const Dashboard = ({mockTransactions} : DashboardTableProps) =>{
    return (
        <div className = "mainDashBoard">
            <section>
                <h2>FraudWatch</h2>
                <h4>Fraud Watch Monitoring</h4>
            </section>
            <section>
                <DashboardTable mockTransactions={mockTransactions}/>
            </section>
          
        </div>
    );
}


export default Dashboard;