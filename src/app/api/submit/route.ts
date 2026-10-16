import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Form from "@/models/formModel";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Await headers first
    const headersList = await headers();

    const ip =
      headersList.get("x-forwarded-for") ||
      headersList.get("x-real-ip") ||
      "unknown";

    const created = await Form.create({
      ...body,
      ipAddress: ip,
      submittedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      id: created.id,
    });
  } catch (error) {
    console.error("Submission error:", error);

    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}