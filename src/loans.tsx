import { Loan } from "./types";

export interface LoansProps {
  loans: Loan[];
}

export function Loans({ loans }: LoansProps) {
  return (
    <>
      {loans.map((loan, index) => (
        <div key={index}>
          <div><strong>Name:</strong> {loan.productName}</div>
          <div><strong>Loan Type:</strong> {loan.description}</div>
          <div><strong>Interest Rate:</strong> {loan.interestRate}%</div>
          <div><strong>Loan Balance:</strong> {loan.actualBalance.value} {loan.actualBalance.currencyCode}</div>
          <div><strong>Original Loan Amount:</strong> {loan.originalBalance.value} {loan.originalBalance.currencyCode}</div>
          <div><strong>Payoff Balance:</strong> {loan.currentPayoffBalance.value} {loan.currentPayoffBalance.currencyCode}</div>
          <div><button>Payoff Loan</button></div>
        </div>
      ))}
    </>
  );
}