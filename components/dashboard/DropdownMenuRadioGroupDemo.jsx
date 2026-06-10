"use client";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuRadioGroupDemo({
  isEditing = false,
  onSaveQuickAction,

  onCancel,
  disabled = false,
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className="mt-4 ml-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-3 disabled:opacity-50 cursor-pointer"
        >
          {isEditing ? "Update Content" : "Save Content"}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-52 backdrop-blur-xl border-dark-border">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={onSaveQuickAction}
          >
            {isEditing ? "Update Quick Action" : "Save as Quick Action"}
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer" onClick={onCancel}>
            Cancel
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
