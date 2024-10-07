"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Repeat, Image as ImageIcon } from "lucide-react";

export default function TweetForm() {
  const [content, setContent] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the tweet to your backend
    console.log("New tweet:", content);
    setContent("");
  };

  if (!isMounted) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border-b border-gray-200 p-4"
    >
      <div className="flex items-start space-x-4">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Your avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex-grow">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="w-full border-none bg-transparent resize-none focus:ring-0 p-0 text-lg"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary"
                type="button"
                aria-label="Add image"
              >
                <ImageIcon className="w-5 h-5" />
              </Button>
            </div>
            <Button
              type="submit"
              disabled={!content.trim()}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
