"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
const List = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("desc");

  const { data: session, status } = useSession();

  const router = useRouter();
  // session
  // console.log("session", session);
  // console.log(status);

  /* useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);
*/
  // const handleClick = (postId) => {
  //   // Call your notify function (assuming you want a notification for the delete action)
  //   // toast.error("Delete Complete !", {
  //   //   position: "top-right",
  //   // });
  //   // Perform the delete action
  //   deletePost(postId);
  // };

  const fetchPosts = async () => {
    try {
      const query = new URLSearchParams({ category, search, sort }).toString();
      const res = await axios.get(`/api/posts?${query}`);
      setPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // เพิ่มการดึง category ผ่าน API เพื่อใช้สำหรับ filter
  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/categories");
      setCategories(res.data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };
  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);
  const handleApplyFilters = () => {
    fetchPosts();
  };
  // delete
  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`);
      // delay for 3 seconds
      toast.error("Delete Complete !", {
        position: "top-center",
        autoClose: 1000, // Toast will be visible for 3 seconds
        onClose: () => {
          // Redirect after 3 seconds
          setTimeout(() => {
            router.push("/");
          }, 0); // Immediate redirect after the toast closes
        },
      });
      // Refresh the list of posts
      setTimeout(() => {
        fetchPosts();
      }, 3000);

      // fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {status === "authenticated" && session?.user && (
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          {/* check session.user.image */}
          {session.user.image && (
            <Image
              src={session.user.image}
              alt="LogoProfile"
              width={100}
              height={100}
              className="m-4 text-center"
            />
          )}
          <p>
            Welcome, <b>{session.user.name}!</b>
          </p>
          <p>Email: {session.user.email}</p>
          <p>Role: {session.user.role}</p>
          <button
            onClick={() => signOut({ callbackUrl: "/home" })}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
      <h1 className="text-2xl font-semibold mb-6">Blog Posts</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </select>
            <button
              onClick={handleApplyFilters}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Content
              </th>
              {status === "authenticated" && session?.user && (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {post.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {post.category.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {post.content}
                  </div>
                </td>
                {status === "authenticated" &&
                  session?.user?.role === "member" && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                        href={`/edit/${post.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                      <ToastContainer />
                    </td>
                  )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        href="/create"
      >
        Create a New Post
      </Link>
    </div>
  );
};

export default List;
