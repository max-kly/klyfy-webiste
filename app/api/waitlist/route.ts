import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, companyName } = body;
    const message = `
🚀 New waitlist submission

👤 Name: ${name}
📧 Email: ${email}
🏢 Company: ${companyName}
`;
    await fetch(
      `https://api.telegram.org/bot${process.env.TG_KEY}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TG_CHAT,
          text: message,
        }),
      },
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
