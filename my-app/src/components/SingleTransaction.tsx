
import React, { Component, useState } from "react";
import Transaction from "../types/Transaction";
import RiskBadge from "./RiskBadge";

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import TransactionDetails from "./TransactionDetails";

export interface SingleTransactionProps{
   transaction :Transaction
   
}

const SingleTransaction = ({transaction} : SingleTransactionProps) =>{ 

    const [state, setState] = useState({
        isPaneOpen: false,

    });

  
 
    return (
        <>
        <li style = {{backgroundColor : "",display : "flex", justifyContent: "space-between",width : "70vw"}}  onClick={() => setState({ isPaneOpen: true })}>
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

        <SlidingPane
            className="TransactionDetailsSlidingWindow"
            // overlayClassName="some-custom-overlay-class"
            isOpen={state.isPaneOpen}
            // title="Hey, it is optional pane title.  I can be React component too."
            // subtitle="Optional subtitle."
            onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            setState({ isPaneOpen: false });
            }}
            >
            <div>
                <TransactionDetails transactionToBeDisplayed={transaction} />
            </div>
            
      </SlidingPane>


        </>
    );
}

export default SingleTransaction;