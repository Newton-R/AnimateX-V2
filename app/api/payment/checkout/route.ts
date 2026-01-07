// app/checkout/route.ts
import { Checkout } from "@dodopayments/nextjs";

// export const GET = Checkout({
//   bearerToken: process.env.DODO_PAYMENTS_API_KEY,
//   returnUrl: process.env.DODO_PAYMENTS_RETURN_URL,
//   environment: process.env.DODO_PAYMENTS_ENVIRONMENT,
//   type: "static", // optional, defaults to 'static'
// });

// export const POST = Checkout({
//   bearerToken: process.env.DODO_PAYMENTS_API_KEY,
//   returnUrl: process.env.DODO_PAYMENTS_RETURN_URL,
//   environment: process.env.DODO_PAYMENTS_ENVIRONMENT,
//   type: "dynamic", // for dynamic checkout
// });

export const POST = Checkout({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY,
  returnUrl: process.env.DODO_PAYMENTS_RETURN_URL,
  environment: "test_mode",
  type: "session", // for checkout sessions
});