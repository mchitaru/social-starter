import Link from "next/link";
import { Home, Settings, User, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sidebar() {
  return (
    <aside className="hidden sm:flex w-64 fixed left-0 top-0 bottom-0 bg-background border-r border-gray-200 flex-col p-4 overflow-y-auto">
      <Link href="/" className="text-primary mb-6">
        <Twitter className="h-8 w-8" />
        <span className="sr-only">Twitter</span>
      </Link>
      <nav className="space-y-2 flex-grow">
        <Link
          href="/"
          className="flex items-center space-x-2 p-2 hover:bg-accent hover:text-accent-foreground rounded-full"
        >
          <Home className="h-6 w-6" />
          <span className="text-lg">Home</span>
        </Link>
      </nav>
      <div className="mt-auto">
        <Link
          href="/profile"
          className="flex items-center space-x-2 p-2 hover:bg-accent hover:text-accent-foreground rounded-full"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="/placeholder.svg?height=40&width=40"
              alt="User Avatar"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">John Doe</span>
            <span className="text-sm text-muted-foreground">@johndoe</span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
