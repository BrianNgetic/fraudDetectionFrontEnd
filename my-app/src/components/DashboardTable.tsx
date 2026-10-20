import { mockTransactions } from '../data/mockTransactions';
import Transaction from '../types/Transaction';
import DashboardTableRow from "./DashboardTableRow"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type LocalDateTime = string;
type GeoLocation = number 
//& { readonly __brand: unique symbol };

{/* 
my rows will contain the  information from the transaction
but risk level from the associated fraud-analysisresult if/when available

for now lets jus do the transaction part
 
this ugly code is jus for now before i expose the back end

*/}
export interface DashboardTableProps{
    TransactionEvent? : Transaction;
    mockTransactions : Transaction[];
}



const DashboardTable = ({ mockTransactions} : DashboardTableProps) => {
 
    return(
       <div>
            
        <TableContainer component={Paper} >
            <Table  className = 'mainTableContainer'>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Currency</TableCell>
                        <TableCell>Merchant</TableCell>
                        <TableCell>Time</TableCell>
                        {/* <TableCell>Risk Level</TableCell>  */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockTransactions.map((mockTransaction) => (
                        <DashboardTableRow key = {mockTransaction.id} TransactionEvent = {mockTransaction} />
                    )

                    )}
                    
                </TableBody>

            </Table>
        </TableContainer>
    
        </div>
    );
}

export default DashboardTable;