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
                  description: "Loan 1",
                  accountNickName: "Auto Loan",
                  actualBalance: { value: 800, currencyCode: "USD" },
                  meta: {
                    loanMeta: {
                      interestRate: 0.05,
                      originalBalance: { value: 1000, currencyCode: "USD" },
                      currentPayoffBalance: { value: 800, currencyCode: "USD" },
                    }
                  },
                },
                {
                  description: "Loan 2",
                  accountNickName: "Mortgage",
                  actualBalance: { value: 1500, currencyCode: "USD" },
                  meta: {
                    loanMeta: {
                      interestRate: 0.03,
                      originalBalance: { value: 2000, currencyCode: "USD" },
                      currentPayoffBalance: { value: 1500, currencyCode: "USD" },
                    }
                  },
                },
                {
                  description: "Loan 3",
                  accountNickName: "Student Loan",
                  actualBalance: { value: 2500, currencyCode: "USD" },
                  meta: {
                    loanMeta: {
                      interestRate: 0.04,
                      originalBalance: { value: 3000, currencyCode: "USD" },
                      currentPayoffBalance: { value: 2500, currencyCode: "USD" },
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