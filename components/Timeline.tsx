"use client";

import { useState, useEffect } from "react";
import Tweet from "./Tweet";
import { useInView } from "react-intersection-observer";

// Mock data
const mockTweets = Array.from({ length: 100 }, (_, i) => ({
  id: `tweet-${i}`,
  user: {
    name: `User ${i}`,
    username: `user${i}`,
    avatar: `/placeholder.svg?height=40&width=40`,
  },
  content: `This is tweet number ${i}. #TwitterClone`,
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 20),
}));

export default function Timeline() {
  const [tweets, setTweets] = useState<typeof mockTweets>([]);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  useEffect(() => {
    setTweets(mockTweets.slice(1, 10));
  }, []);

  useEffect(() => {
    if (inView) {
      const nextTweets = mockTweets.slice(page * 10, (page + 1) * 10);
      setTweets((prevTweets) => [...prevTweets, ...nextTweets]);
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, page]);

  return (
    <section aria-label="Tweet Timeline" className="w-full space-y-4 m-4">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
      <div ref={ref} className="h-10" />
    </section>
  );
}
