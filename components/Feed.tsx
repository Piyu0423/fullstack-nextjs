"use client";

import { useState, useEffect } from "react";
import PromptCard from "@components/PromptCard";

const PromptCardList = ({ posts, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {posts.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setAllPosts(data);
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
  };
  const handleTagClick = (tag) => {};
  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        posts={searchedResults.length ? searchedResults : allPosts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
