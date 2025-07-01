import { Icons } from "@/Components/icons";
import { Link } from "react-router-dom";
import type { User } from "@/Types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

interface UserProps {
  user: User;
}
export default function AuthdropDown({ user }: UserProps) {
  if (!user) {
    return (
      <Button asChild>
        <Link to="/signin">Sign In</Link>
        <div className="sr-only">Sign in</div>
      </Button>
    );
  }
  //    const initialName = `${user.firstName.charAt(0) ?? ''}${user.lastName.charAt(0) ?? ""}`
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.imageUrl} alt="@shadcn" />
            <AvatarFallback>
              {user.username ? user.username.charAt(0) : "U"}
            </AvatarFallback>
          </Avatar>
          <span className="sr-only">User menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="flex items-center justify-start gap-2 p-4">
          <div className="flex flex-col space-y-1 leading-none">
            {user.username && <p className="font-medium">{user.username}</p>}
            {user.email && (
              <p className="text-muted-foreground w-[200px] truncate text-sm">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <Link to="/dashboard">
          <DropdownMenuItem className="flex justify-between">
            Dashboard
            <Icons.dashbord className="h-4 w-4" />
          </DropdownMenuItem>
        </Link>
        <Link to="/dashboard/billing">
          <DropdownMenuItem className="flex justify-between">
            Billing
            <Icons.layers className="h-4 w-4" />
          </DropdownMenuItem>
        </Link>
        <Link to="/dashboard/settings">
          <DropdownMenuItem className="flex justify-between">
            Settings
            <Icons.gear className="h-4 w-4" />
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link to="/login">
          <DropdownMenuItem className="flex justify-between">
            Log out
            <Icons.exit className="h-4 w-4" />
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
