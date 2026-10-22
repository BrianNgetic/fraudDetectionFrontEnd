

import Transaction from "@/types/Transaction"

interface TransactionDetailsProps {
  transactionToBeDisplayed: Transaction
}

const TransactionDetails = ({ transactionToBeDisplayed }: TransactionDetailsProps) => {
  return (
    <div>
      {/* Header */}
      <div>
        <h2>Transaction Details</h2>
        <p>ID: {transactionToBeDisplayed.id}</p>
      </div>

      {/* Amount & Risk */}
      <div>
        <span>
          {transactionToBeDisplayed.amount} {transactionToBeDisplayed.currency}
        </span>
        <span>
          {transactionToBeDisplayed.riskLevel} Risk
        </span>
      </div>

      {/* Details List */}
      <div>
        <div>
          <span>Merchant: </span>
          <span>{transactionToBeDisplayed.merchant}</span>
        </div>

        <div>
          <span>Category: </span>
          <span>{transactionToBeDisplayed.category}</span>
        </div>

        <div>
          <span>Timestamp: </span>
          <span>{new Date(transactionToBeDisplayed.time).toLocaleString()}</span>
        </div>

        <div>
          <span>Customer ID: </span>
          <span>{transactionToBeDisplayed.customerId}</span>
        </div>

        <div>
          <span>Device ID: </span>
          <span>{transactionToBeDisplayed.deviceId}</span>
        </div>

        <div>
          <span>Country: </span>
          <span>{transactionToBeDisplayed.country}</span>
        </div>

        <div>
          <span>Coordinates: </span>
          <span>
            {transactionToBeDisplayed.latitude?.toFixed(4)}, {transactionToBeDisplayed.longitude?.toFixed(4)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TransactionDetails