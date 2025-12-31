import DodoPayments from 'dodopayments'

export const dodopayment = new DodoPayments({
    bearerToken: process.env.DODO_PAYMENTS_API_KEY,
    environment: "test_mode"
});