"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { signOutAction } from "@/app/actions/auth";

export default function UserMenu({ initials }) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOutAction();
    router.refresh();
    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="w-8 h-8 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
        >
          {initials}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-32 sm:w-28 mt-2"
      >
        <DropdownMenuItem className="flex items-center gap-2">
          <UserIcon size={16} />
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <CreditCardIcon size={16} />
          Billing
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <SettingsIcon size={16} />
          Settings
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-600 focus:text-red-700 border-t border-base"
        >
          <LogOutIcon size={16} />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
