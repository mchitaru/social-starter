"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the search query to your backend
    console.log("Searching for:", query);
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full mb-8">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Twitter"
        className="mr-2"
      />
      <Button type="submit">
        <Search className="w-4 h-4" />
      </Button>
    </form>
  );
}
