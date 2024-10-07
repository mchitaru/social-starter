"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, MessageCircle, Repeat, Share } from "lucide-react";

interface TweetProps {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  likes: number;
  comments: number;
}

export default function Tweet({
  id,
  user,
  content,
  likes,
  comments,
}: TweetProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <article className="border-b border-gray-200 p-4">
      <div className="flex items-center mb-2">
        <Image
          src={user.avatar}
          alt={user.name}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <h3 className="font-bold">{user.name}</h3>
          <Link href={`/user/${user.username}`} className="text-gray-500">
            @{user.username}
          </Link>
        </div>
      </div>
      <Link href={`/tweet/${id}`} className="block mb-3">
        <p>{content}</p>
      </Link>
      <div className="flex justify-between text-gray-500">
        <button
          className="flex items-center"
          aria-label={`${comments} comments`}
        >
          <MessageCircle className="w-5 h-5 mr-1" />
          {comments}
        </button>
        <button
          className={`flex items-center ${isLiked ? "text-red-500" : ""}`}
          onClick={handleLike}
          aria-label={`${likeCount} likes`}
          aria-pressed={isLiked}
        >
          <Heart className="w-5 h-5 mr-1" />
          {likeCount}
        </button>
        <button className="flex items-center" aria-label={`shares`}>
          <Share className="w-5 h-5 mr-1" />
        </button>
      </div>
    </article>
  );
}
