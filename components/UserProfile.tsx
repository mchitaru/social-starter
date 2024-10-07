"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface UserProfileProps {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
}

export default function UserProfile({
  id,
  name,
  username,
  avatar,
  bio,
  followers,
  following,
}: UserProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(followers);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleFollow = () => {
    if (isFollowing) {
      setFollowerCount((prevCount) => prevCount - 1);
    } else {
      setFollowerCount((prevCount) => prevCount + 1);
    }
    setIsFollowing((prevState) => !prevState);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section
      className="w-full border-b border-gray-200 p-4 mb-4"
      aria-labelledby={`user-profile-${id}`}
    >
      <div className="flex items-center mb-4">
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <div>
          <h2 id={`user-profile-${id}`} className="text-xl font-bold">
            {name}
          </h2>
          <p className="text-gray-500">@{username}</p>
        </div>
      </div>
      <p className="mb-4">{bio}</p>
      <div className="flex justify-between mb-4">
        <span>
          <strong>{followerCount}</strong> Followers
        </span>
        <span>
          <strong>{following}</strong> Following
        </span>
      </div>
      <Button
        onClick={handleFollow}
        variant={isFollowing ? "outline" : "default"}
        aria-pressed={isFollowing}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </section>
  );
}
