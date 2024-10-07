import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-background border-b border-gray-200 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-1 max-w-xl">
            <h1 className="text-xl font-bold">Home</h1>
          </div>
        </div>
      </div>
    </nav>
  );
}
