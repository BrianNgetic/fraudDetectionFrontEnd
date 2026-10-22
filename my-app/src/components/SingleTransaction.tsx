import { useState } from "react";
import Transaction from "../types/Transaction";
import RiskBadge from "./RiskBadge";
import TransactionDetails from "./TransactionDetails";

export interface SingleTransactionProps{
   transaction :Transaction
   
}

const SingleTransaction = ({transaction} : SingleTransactionProps) =>{ 


    const[isVisible, setIsVisible] = useState(false);

    const handClick = () => {
            setIsVisible(true);
    }

 
    return (
        <>
        <li style = {{backgroundColor : "",display : "flex", justifyContent: "space-between",width : "70vw"}} onClick={handClick}>
            <div style = {{display : "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                <span>{transaction.id}</span>
                <div>
                    <span>{transaction.customerId}</span>
                    <span>.</span>
                    <span> {transaction.merchant}</span>
                </div>
            </div>
            <div >
               <div style = {{display: "flex",flexDirection: 'column', justifyContent : "flex-end"}}> 
                    <span>{transaction.amount}</span>
                    <RiskBadge Level = {transaction.riskLevel} />
                </div>
                {/* <div>
                    <p> arrow key</p>
                </div> */}
            </div>
            {isVisible && <TransactionDetails transactionToBeDisplayed={transaction} />}

        </li>
        </>
    );
}

export default SingleTransaction;