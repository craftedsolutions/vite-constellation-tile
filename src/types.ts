export interface Loan {
  description: string;
  productName: string;
  interestRate: number;
  actualBalance: { value: number; currencyCode: string };
  originalBalance: { value: number; currencyCode: string };
  currentPayoffBalance: { value: number; currencyCode: string };
}