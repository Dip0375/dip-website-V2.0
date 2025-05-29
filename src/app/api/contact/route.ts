import { sanityClient } from "@/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    const doc = {
      _type: "contact",
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    };

    const result = await sanityClient.create(doc);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Sanity create error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}