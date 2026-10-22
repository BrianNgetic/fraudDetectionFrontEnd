import React, { useRef, useState } from "react";
import Transaction from "../types/Transaction";
 import SingleTransaction from "../components/SingleTransaction";
import { KeyboardReturnRounded } from "@mui/icons-material";
//  import { SingleTransactionProps } from "../components/SingleTransaction";

 interface TransactionsProps{
        transaction? : Transaction;
        listOfTransactions : Transaction[];
   
 }
 
 const Transactions = ({listOfTransactions}: TransactionsProps) =>{ 

        const searchInputRef = useRef<HTMLInputElement>(null)

        const[selectedGroup, setSelectedGroup] = useState("All");
        const[search, setSearch] = useState('');
       
        // const handleFilter = (event : React.MouseEvent<HTMLButtonElement>) => { 
        //         event?.preventDefault();
        //         console.log(event.currentTarget.value);
        // }

        const handleFilter = (transaction : Transaction) =>{
                console.log(transaction.customerId);
        }

        const handleSearch = (e : React.SubmitEvent) => {
                e.preventDefault();

                if(searchInputRef.current){
                        setSearch(searchInputRef.current.value);
                }

                console.log(search);
                console.log(selectedGroup);
              
        }

       const normalizedSearch = search.trim().toLowerCase();
       const riskWeights = {
                LOW: 1,
                MEDIUM: 2,
                HIGH: 3
        };

        const transactionsToDisplay = listOfTransactions
        .filter((t) => {
                if (!normalizedSearch) return true;
                
                // 2. Safely cast to string to prevent crashes if IDs are numbers
                const id = String(t.id).toLowerCase();
                const customerId = String(t.customerId).toLowerCase();
                
                return id.includes(normalizedSearch) || customerId.includes(normalizedSearch);
        })
        .sort((a, b) => {
                switch (selectedGroup) {
                        case "Highest":
                               return riskWeights[b.riskLevel] - riskWeights[a.riskLevel]
                        case "Lowest":
                                return riskWeights[a.riskLevel] - riskWeights[b.riskLevel];
                        
                        // 3. Fixed capitalization bug for "Largest" / "Smallest" (kept lowercase for consistency)
                        case "Largest": 
                                return Number(b.amount) - Number(a.amount);
                        case "Smallest":
                                return Number(a.amount) - Number(b.amount);
                        
                        // 4. Performance boost: use Date.parse() or numerical subtraction if time is a timestamp/ISO string
                        case "Newest":
                                return Date.parse(b.time) - Date.parse(a.time);
                        case "Oldest":
                                return Date.parse(a.time) - Date.parse(a.time);
                        
                default:
                        return 0;
        }
        });



        return (
         <>

                <div className="searchContainer">

                        <form onSubmit = {handleSearch}>
                                <input type = "search" placeholder="Search transaction ID or customer..."
                                ref = {searchInputRef}
                                        style={{width : "100vw"}}
                                >
                                </input>
                                <button type = "submit">Search</button>
                        </form>

                          <div  className="sortContainter">
                        <label>Sort By: </label>

                        <select id  = "sortOptions" onChange={ (e) => {setSelectedGroup(e.target.value)}}>
                                <option value  = "All"> All </option>
                                <option value = "Newest">Newest first</option>
                                <option value = "Oldest">Oldest first</option>
                                <option value = "Highest" >Highest Risk</option>
                                <option value = "Lowest">Lowest Risk</option>
                                <option value = "Largest">Largest Amount</option>
                                <option value = "Smallest">smallest Amount</option>
                                
                        </select>

                </div>

                </div>
              

                <ul style={{ backgroundColor: "#0066bb" }}>
                        {
                      
                        transactionsToDisplay.map( (singleTransaction) => (
                                
                          <div onClick={() => handleFilter(singleTransaction)}>
                                <SingleTransaction   key = {singleTransaction.id} transaction ={ singleTransaction}
                                />
                           </div>
                        ))
                     
                        }
                </ul>
         </>
        );
}

export default Transactions;