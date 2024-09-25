"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function create() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/posts", {
        title,
        content,
        categoryId,
      });

      console.log(response.data);

      setTitle("");
      setContent("");

      toast.success("Success Notification!", {
        position: "top-center",
        autoClose: 1000, // Toast will be visible for 3 seconds
        onClose: () => {
          // Redirect after 3 seconds
          setTimeout(() => {
            router.push("/home");
          }, 0); // Immediate redirect after the toast closes
        },
      });
      // router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Create a New Post
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 shadow-md rounded-lg"
        >
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-4 h-14 sm:text-lg"
              placeholder="Enter your post title"
            />
          </div>

          {/* Content Input */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              name="content"
              id="content"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-4 h-40 sm:text-lg"
              placeholder="Write your content here..."
            ></textarea>
          </div>

          {/* Category Dropdown */}
          <div>
            <label
              htmlFor="Category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-1 block w-full"
            >
              <select
                id="category"
                value={categoryId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onChange={(e) => setCategoryId(e.target.value)}
                className="block w-full rounded-lg border-gray-300 shadow-lg focus:border-indigo-600 focus:ring-indigo-600 text-lg p-4 h-14 bg-white transition-all duration-300 ease-in-out hover:bg-gray-100 sm:text-lg"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </motion.div>
            {/* <select
              id="category"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-4 h-14 sm:text-lg"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select> */}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Link
              href="/"
              type="submit"
              className="inline-flex justify-center py-2 px-4 mr-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back to Home
            </Link>
            <button
              onClick={handleSubmit}
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </>
  );
}

export default create;
