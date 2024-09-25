import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "desc";

  const whereCondition = category
    ? {
        category: {
          is: {
            name: category,
          },
        },
        title: {
          contains: search,
          mode: "insensitive",
        },
      }
    : {
        title: {
          contains: search,
          mode: "insensitive",
        },
      };

  try {
    const posts = await prisma.post.findMany({
      where: whereCondition,
      orderBy: {
        createdAt: sort,
      },
      include: {
        category: true,
      },
    });
    return Response.json(posts);
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
}

// const posts = await prisma.post.findMany();
// return Response.json(posts);
// POST
export async function POST(request) {
  const { title, content, categoryId } = await request.json();
  const newPost = await prisma.post.create({
    data: { title, content, categoryId: Number(categoryId) },
  });
  return Response.json(newPost);
}
