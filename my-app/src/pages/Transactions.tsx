 import Transaction from "../types/Transaction";
 import SingleTransaction from "../components/SingleTransaction";
//  import { SingleTransactionProps } from "../components/SingleTransaction";

 interface TransactionsProps{
        transaction? : Transaction;
        listOfTransactions : Transaction[];
 }
 
 const Transactions = ({listOfTransactions}: TransactionsProps) =>{
        return (

                <ul>
                        {
                        listOfTransactions.map( (singleTransaction) => (
                                <SingleTransaction   key = {singleTransaction.id} transaction ={ singleTransaction} />
                        ))
                        }
                </ul>
        );
}

export default Transactions;