import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// PUT
export async function PUT(request, { params }) {
  const { id } = params;
  const { name } = await request.json();

  const category = await prisma.category.update({
    where: { id: Number(id) },
    include: {
      posts: true, // Include related posts in the response
    },
  });

  return Response.json(category);
}

// DELETE
export async function DELETE(request, { params }) {
  const { id } = params;

  const category = await prisma.category.delete({
    where: { id: Number(id) },
  });

  return Response.json(category);
}
