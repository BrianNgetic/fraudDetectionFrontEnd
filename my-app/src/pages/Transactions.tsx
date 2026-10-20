 import Transaction from "../types/Transaction";
 import SingleTransaction from "../components/SingleTransaction";

 interface TransactionsProps{
        transaction :Transaction;
        listOfTransactions: Transaction[];
 }
 
 const Transactions = ({listOfTransactions , transaction}: TransactionsProps) =>{
        return (

                <ul>
                        listOfTransactions.map( (singleTransaction) => (
                                <SingleTransaction  transaction ={ SingleTransaction} />
                        ))
                </ul>
        );
}

export default Transactions;