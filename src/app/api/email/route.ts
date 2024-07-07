import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(request: Request) {
  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
  console.log("request", request);
  NextResponse.json({
    message: "success",
    status: 200,
  });
}
