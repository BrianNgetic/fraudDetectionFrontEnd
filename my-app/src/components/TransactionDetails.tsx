import { useState } from "react"
import { Drawer } from "vaul"
import Transaction from "@/types/Transaction"

interface TransactionDetailsProps {
  transactionToBeDisplayed: Transaction
}

const TransactionDetails = ({ transactionToBeDisplayed }: TransactionDetailsProps) => {
  const [open, setOpen] = useState(false)

  // const formatCurrency = (amount: number, currency: string) => {
  //   try {
  //     return new Intl.NumberFormat(undefined, {
  //       style: "currency",
  //       currency: currency || "USD",
  //     }).format(amount)
  //   } catch {
  //     return `${amount} ${currency}`
  //   }
  // }

  const getRiskBadgeColor = (risk: string) => {
    switch (risk?.toLowerCase()) {
      case "high":
      case "critical":
        return "bg-red-100 text-red-700 border-red-200"
      case "medium":
        return "bg-amber-100 text-amber-700 border-amber-200"
      default:
        return "bg-emerald-100 text-emerald-700 border-emerald-200"
    }
  }

  return (
    <Drawer.Root direction="right" open={open} onOpenChange={setOpen}>
      <Drawer.Trigger className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium rounded-md shadow-sm">
        View Details
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50 backdrop-blur-[2px]" />
        
        <Drawer.Content className="bg-white fixed bottom-0 right-0 top-0 w-full sm:w-96 z-50 p-6 flex flex-col shadow-2xl focus:outline-none">
          {/* Header */}
          <div className="border-b pb-4">
            <Drawer.Title className="font-semibold text-xl text-zinc-900">
              Transaction Details
            </Drawer.Title>
            <Drawer.Description className="text-sm text-zinc-500 mt-1">
              ID: {transactionToBeDisplayed.id}
            </Drawer.Description>
          </div>

          {/* Amount Spotlight */}
          <div className="py-4 border-b flex items-center justify-between">
            <span className="text-2xl font-bold text-zinc-900">
                
            </span>
            <span
              className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border capitalize ${getRiskBadgeColor(
                transactionToBeDisplayed.riskLevel
              )}`}
            >
              {transactionToBeDisplayed.riskLevel} Risk
            </span>
          </div>

          {/* Details List */}
          <div className="py-4 flex-1 overflow-y-auto space-y-3 text-sm">
            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500">Merchant</span>
              <span className="font-medium text-zinc-800">{transactionToBeDisplayed.merchant}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500">Category</span>
              <span className="font-medium text-zinc-800">{transactionToBeDisplayed.category}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500">Timestamp</span>
              <span className="font-medium text-zinc-800">
                {new Date(transactionToBeDisplayed.time).toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500">Customer ID</span>
              <span className="font-mono text-xs text-zinc-800">{transactionToBeDisplayed.customerId}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500">Device ID</span>
              <span className="font-mono text-xs text-zinc-800">{transactionToBeDisplayed.deviceId}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500">Country</span>
              <span className="font-medium text-zinc-800">{transactionToBeDisplayed.country}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500">Coordinates</span>
              <span className="font-mono text-xs text-zinc-800">
                {transactionToBeDisplayed.latitude?.toFixed(4)}, {transactionToBeDisplayed.longitude?.toFixed(4)}
              </span>
            </div>
          </div>

          {/* Actions */}
          <button
            onClick={() => setOpen(false)}
            className="mt-4 w-full py-2.5 bg-zinc-100 hover:bg-zinc-200 transition-colors text-zinc-800 font-medium rounded-lg text-sm"
          >
            Close
          </button>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default TransactionDetails