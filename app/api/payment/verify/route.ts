import { WebhookPayload } from "dodopayments/resources";
import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "standardwebhooks";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";

export const POST = async (request: NextRequest) => {
  const webhook = new Webhook(process.env.DODO_PAYMENTS_WEBHOOK_KEY || "");
  const rawbody = await request.text();
  const webhookheaders = {
    "webhook-id": request.headers.get("webhook-id") || "",
    "webhook-timestamp": request.headers.get("webhook-timestamp") || "",
    "webhook-signature": request.headers.get("webhook-signature") || "",
  };

  try{
     await webhook.verify(rawbody, webhookheaders);
  }catch(err){
    console.log("Invalid web hook")
    return NextResponse.json({error: "Invalid Web Hook"}, {status: 400})
  }
 
  const payload = JSON.parse(rawbody) as WebhookPayload;

  if(payload.type !== "subscription.active" || payload.data.payload_type !== "Subscription"){
    console.log("Invalid payload")
    return NextResponse.json({error: "Ignored Event"}, {status: 200})
  }{
    try{
       await prisma.subscribed.create({
            data: {
              user: {
                connect: {
                  email: payload.data.customer.email.toLowerCase(),
                },
              },
              payment_status: payload.data.status,
            },
          });
          return NextResponse.json({
            message: "Payment Successful"
          }, {status: 200});
    }catch(e){
       return NextResponse.json({Error: "COuld not store / find paid user in db"},{status: 400});
    }
  }
};
