import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Heart, MessageCircle, Repeat } from "lucide-react";
import TweetForm from "@/components/TweetForm";

// Mock data (in a real app, this would come from a database)
const tweets = [
  {
    id: "tweet-1",
    user: {
      name: "John Doe",
      username: "johndoe",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    content: "This is a sample tweet #1",
    likes: 10,
    retweets: 5,
    comments: 3,
    createdAt: "2023-05-01T12:00:00Z",
  },
  // ... more tweets
];

export async function generateStaticParams() {
  return tweets.map((tweet) => ({
    id: tweet.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const tweet = tweets.find((t) => t.id === params.id);

  if (!tweet) {
    return {
      title: "Tweet Not Found",
    };
  }

  return {
    title: `${tweet.user.name} on Twitter: "${tweet.content.substring(
      0,
      60
    )}..."`,
    description: tweet.content,
    openGraph: {
      title: `${tweet.user.name} on Twitter: "${tweet.content.substring(
        0,
        60
      )}..."`,
      description: tweet.content,
      images: [
        { url: tweet.user.avatar, width: 64, height: 64, alt: tweet.user.name },
      ],
    },
  };
}

export default function TweetPage({ params }: { params: { id: string } }) {
  const tweet = tweets.find((t) => t.id === params.id);

  if (!tweet) {
    notFound();
  }

  return (
    <>
      <article className="mx-auto p-6 bg-white border-b border-gray-200">
        <header className="flex items-center mb-4">
          <Image
            src={tweet.user.avatar}
            alt={tweet.user.name}
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">{tweet.user.name}</h2>
            <Link
              href={`/user/${tweet.user.username}`}
              className="text-gray-500"
            >
              @{tweet.user.username}
            </Link>
          </div>
        </header>
        <p className="text-xl mb-4">{tweet.content}</p>
        <time dateTime={tweet.createdAt} className="text-gray-500 mb-4 block">
          {new Date(tweet.createdAt).toLocaleString()}
        </time>
        <div className="flex justify-between text-gray-500">
          <button
            className="flex items-center"
            aria-label={`${tweet.comments} comments`}
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            {tweet.comments}
          </button>
          <button
            className="flex items-center"
            aria-label={`${tweet.retweets} retweets`}
          >
            <Repeat className="w-5 h-5 mr-1" />
            {tweet.retweets}
          </button>
          <button
            className="flex items-center"
            aria-label={`${tweet.likes} likes`}
          >
            <Heart className="w-5 h-5 mr-1" />
            {tweet.likes}
          </button>
        </div>
      </article>
      <TweetForm />
    </>
  );
}
