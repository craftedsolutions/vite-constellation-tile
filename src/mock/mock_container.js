// ====FOR LOCAL DEVELOPMENT ONLY, DO NOT UPLOAD THIS FILE====
/* eslint-disable no-undef */

window.container = {};
window.container.core = {};

container.core.getAccounts = function (callbackFunc) {
  const response = {
    success: true,
    data: {
        loanAccountDetails: {
          loanMessage: {
            loanList: {
                loan: [
                {
                  accountId: "14739L0020",
                  description: "Loan 1",
                  accountNickName: "Auto Loan",
                  actualBalance: { value: 800, currencyCode: "USD" },
                  meta: {
                    loanMeta: {
                      interestRate: 0.05,
                      originalBalance: { value: 1000, currencyCode: "USD" },
                      currentPayoffBalance: { value: 800, currencyCode: "USD" },
                      minimumPayment: { value: 100, currencyCode: "USD" },
                      currentDueDate: "2024-12-01T00:00:00+0000"
                    }
                  },
                },
                {
                  accountId: "14739L0021",
                  description: "Loan 2",
                  accountNickName: "Mortgage",
                  actualBalance: { value: 1500, currencyCode: "USD" },
                  meta: {
                    loanMeta: {
                      interestRate: 0.03,
                      originalBalance: { value: 2000, currencyCode: "USD" },
                      currentPayoffBalance: { value: 1500, currencyCode: "USD" },
                      minimumPayment: { value: 200, currencyCode: "USD" },
                      currentDueDate: "2024-12-02T00:00:00+0000"
                    }
                  },
                },
                {
                  accountId: "14739L0022",
                  description: "Loan 3",
                  accountNickName: "Student Loan",
                  actualBalance: { value: 2500, currencyCode: "USD" },
                  meta: {
                    loanMeta: {
                      interestRate: 0.04,
                      originalBalance: { value: 3000, currencyCode: "USD" },
                      currentPayoffBalance: { value: 2500, currencyCode: "USD" },
                      minimumPayment: { value: 300, currencyCode: "USD" },
                      currentDueDate: "2024-12-03T00:00:00+0000"
                    }
                  },
                }
            ]} 
          }
        }
    },
  };

  callbackFunc(response);
};