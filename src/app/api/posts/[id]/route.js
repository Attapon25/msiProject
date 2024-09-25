import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/* Default No Try Catch

export async function GET(request, { params }) {
  const postId = Number(params.id); // Assuming id is a number

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });
  return Response.json(post);
}

// PUT
export async function PUT(request, { params }) {
  const postId = Number(params.id); // Assuming id is a number

  const { title, content } = await request.json();

  const post = await prisma.post.update({
    where: { id: postId },
    data: { title, content },
  });

  return Response.json(post);
}

// DELETE
export async function DELETE(request, { params }) {
  const postId = Number(params.id); // Assuming id is a number

  const post = await prisma.post.delete({
    where: { id: postId },
  });

  return Response.json(post);
}
  */

// ADD try catch
export async function GET(request, { params }) {
  const postId = Number(params.id); // Assuming `id` is a number

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return new Response(JSON.stringify({ error: "Post not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(post), {});
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}

// PUT
export async function PUT(request, { params }) {
  const postId = Number(params.id); // Assuming `id` is a number

  try {
    const { title, content, categoryId } = await request.json();

    const post = await prisma.post.update({
      where: { id: postId },
      data: { title, content, categoryId: Number(categoryId) },
    });

    return new Response(JSON.stringify(post), {});
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update post" }), {
      status: 500,
    });
  }
}

// DELETE
export async function DELETE(request, { params }) {
  const postId = Number(params.id); // Assuming `id` is a number

  try {
    const post = await prisma.post.delete({
      where: { id: postId },
    });

    return new Response(JSON.stringify(post), {});
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete post" }), {
      status: 500,
    });
  }
}
