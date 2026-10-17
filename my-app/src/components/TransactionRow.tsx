import  Transaction from "../types/Transaction"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
{/*
    This is going to accept a transaction interface and 
    return a transaction row
    this wont the whole information , jus basic. onclick -> transactionDetaisl
    */ }
interface TransactionRowProps{
    TransactionEvent : Transaction;
}
const TransactionRow = ({TransactionEvent } : TransactionRowProps) => {

    return(

    <TableRow>
        <TableCell>{TransactionEvent.id}</TableCell>
        <TableCell>{TransactionEvent.customerId}</TableCell>
        <TableCell>{TransactionEvent.amount}</TableCell>
        <TableCell>{TransactionEvent. currency}</TableCell>
        <TableCell>{TransactionEvent.merchant}</TableCell>
        <TableCell>{TransactionEvent.time}</TableCell>
        {/* <TableCell>
            <span>

            </span>
        </TableCell> */}
    </TableRow>
    
    );
}
export default TransactionRow;