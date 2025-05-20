import { useState } from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  const posts = [
    {
      id: 1, // Add an ID to each post
      title: "Understanding React.js",
      description: "A comprehensive guide to mastering React.js.",
      author: "John Doe",
      date: "April 1, 2025",
      image: "https://via.placeholder.com/300",
      topic: "reactjs",
      content: "Full content of the post...", // Add full content
    },
    {
      id: 2,
      title: "Getting Started with Python",
      description: "Learn Python programming from scratch.",
      author: "Jane Smith",
      date: "March 28, 2025",
      image: "https://via.placeholder.com/300",
      topic: "python",
      content: "Full content of the post...", // Add full content
    },
    // Add more posts...
  ];

  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleFilter = (topic: string | null) => {
    setSelectedTopic(topic);
  };

  const filteredPosts =
    selectedTopic === null
      ? posts
      : posts.filter((post) => post.topic === selectedTopic);

  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-4 py-24 sm:py-32">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        {/* <aside className="lg:w-[30%] w-full lg:sticky lg:top-24 h-fit hidden lg:block">
          <Newsletter />
        </aside> */}

        {/* Main Content */}
        <main className="flex-1">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            <button
              onClick={() => handleFilter(null)}
              className={`px-3 py-1.5 rounded-lg ${
                selectedTopic === null
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              All
            </button>
            {["django", "reactjs", "spring", "python", "java"].map((topic) => (
              <button
                key={topic}
                onClick={() => handleFilter(topic)}
                className={`px-3 py-1.5 rounded-lg ${
                  selectedTopic === topic
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </button>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="flex flex-col gap-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full sm:w-40 h-48 object-cover flex-shrink-0"
                />
                <div className="p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1.5">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3 sm:mb-0">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Newsletter */}
          {/* <div className="lg:hidden mt-8">
            <Newsletter />
          </div> */}
        </main>
      </div>
    </section>
  );
};
