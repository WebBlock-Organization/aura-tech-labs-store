import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;
  if (!tenantId) {
    return NextResponse.json(
      { error: "Missing tenant ID" },
      { status: 400 }
    );
  }

  try {
    const setting = await prisma.siteSetting.findUnique({
      where: { tenantId },
    });

    return NextResponse.json(setting);
  } catch (error) {
    console.error("Error fetching site setting:", error);
    return NextResponse.json(
      { error: "Failed to fetch site setting" },
      { status: 500 }
    );
  }
}