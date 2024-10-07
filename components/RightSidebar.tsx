import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RightSidebar() {
  return (
    <aside className="w-80 fixed right-0 top-0 bottom-0 hidden xl:block px-4 space-y-4 border-l border-gray-200 bg-background overflow-y-auto">
      <div className="sticky top-0">
        <div className="flex items-center p-4">
          <Input
            type="search"
            placeholder="Search Twitter"
            className="max-w-sm"
          />
        </div>
        {/* <div className="bg-muted p-4 rounded-lg mb-4">
          <h2 className="font-bold text-xl mb-4">Advanced Search</h2>
          <Input type="search" placeholder="Search Twitter" />
        </div> */}
        <div className="bg-muted p-4 rounded-lg">
          <h2 className="font-bold text-xl mb-4">Who to follow</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((user) => (
              <div key={user} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-bold">User {user}</p>
                    <p className="text-sm text-muted-foreground">@user{user}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
