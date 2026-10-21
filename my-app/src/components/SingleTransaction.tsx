import Transaction from "../types/Transaction";
import RiskBadge from "./RiskBadge";

export interface SingleTransactionProps{
   transaction :Transaction
}

const SingleTransaction = ({transaction} : SingleTransactionProps) =>{ 


    return (
        <>
        <li style = {{backgroundColor : "#3C3939",display : "flex", justifyContent: "space-between",width : "70vw"}}>
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
            

        </li>
        </>
    );
}

export default SingleTransaction;