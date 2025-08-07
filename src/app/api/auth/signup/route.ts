import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db } from "~/server/db";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
  }

  const existingUser = await db.user.findUnique({ where: { email } });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: {
      email,
      hashedPassword,
      name: email.split("@")[0],
      accounts: {
        create: {
          type: "credentials",
          provider: "credentials",
          providerAccountId: email,
        },
      },
    },
  });

  return NextResponse.json({ user }, { status: 201 });
}
