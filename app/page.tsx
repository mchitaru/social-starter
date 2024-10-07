import { Metadata } from "next";
import dynamic from "next/dynamic";
import SearchBar from "@/components/SearchBar";

const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: false });
const TweetForm = dynamic(() => import("@/components/TweetForm"), {
  ssr: false,
});
const UserProfile = dynamic(() => import("@/components/UserProfile"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Twitter Clone - Home",
  description:
    "Welcome to our Twitter Clone. Share your thoughts and connect with others.",
  openGraph: {
    title: "Twitter Clone - Home",
    description:
      "Welcome to our Twitter Clone. Share your thoughts and connect with others.",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Twitter Clone" },
    ],
  },
};

const currentUser = {
  id: "user-1",
  name: "John Doe",
  username: "johndoe",
  avatar: "/placeholder.svg?height=64&width=64",
  bio: "Just a guy tweeting about stuff",
  followers: 1000,
  following: 500,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <UserProfile {...currentUser} /> */}
      {/* <SearchBar /> */}
      <TweetForm />
      <Timeline />
    </main>
  );
}
