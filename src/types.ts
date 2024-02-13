export interface Loan {
  accountId: string;
  description: string;
  productName: string;
  interestRate: number;
  minimumPayment: number;
  paymentDueDate: string;
  actualBalance: { value: number; currencyCode: string };
  originalBalance: { value: number; currencyCode: string };
  currentPayoffBalance: { value: number; currencyCode: string };
}