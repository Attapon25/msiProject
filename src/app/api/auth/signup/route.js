import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { name, email, password, role } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    return Response.json({
      message: "User created successfully",
      data: {
        newUser,
      },
    });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
}
