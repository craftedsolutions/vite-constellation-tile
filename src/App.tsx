import { useEffect, useState } from 'react';
import { Loan } from './types';
import { getContainer } from './container';
import { Loans } from './loans';

function App() {
  const [error, setError] = useState('');
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const container = await getContainer();

      if(!container || !container.core) {
        setError('Container is not available');
        console.log('Container is not available');
      }

      container.core.getAccounts(function (response) {
        if (response.success) {
          const loanData = response.data.loanAccountDetails.loanMessage.loanList.loan.map((loan) => ({
            description: loan.description,
            productName: loan.accountNickName || "No Nickname",
            interestRate: loan.meta.loanMeta.interestRate,
            actualBalance: { value: loan.actualBalance.value, currencyCode: loan.actualBalance.currencyCode },
            originalBalance: { value: loan.meta.loanMeta.originalBalance.value, currencyCode: "USD" },
            currentPayoffBalance: { value: loan.meta.loanMeta.currentPayoffBalance.value, currencyCode: "USD" },
          }));  

          setLoans(loanData);
        } else {
          setError('Error calling getAccounts - ' + response.message);
          console.log('Error calling getAccounts - ' + response.message);
        }
      });
    };

    fetchAccounts();
  }, []);

  return (
    <div style={{ width: '1000px', border: '5px solid red' }}>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <Loans loans={loans} />
      )}
    </div>
  );
}

export default App;