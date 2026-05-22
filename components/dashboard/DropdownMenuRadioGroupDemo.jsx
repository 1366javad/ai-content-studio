"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="mt-4 ml-4 text-base font-medium w-36  bg-primary-500 py-4"
        >
          Choos One
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 md:w-52">
        <DropdownMenuGroup className=" text-nowrap">
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem
              value="save project"
              className="font-semibold dark:hover:bg-slate-800 hover:bg-slate-200"
            >
              Save as new project
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="save existing"
              className="font-semibold dark:hover:bg-slate-800 hover:bg-slate-200"
            >
              Save to existing project
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="cancel"
              className="font-semibold dark:hover:bg-slate-800 hover:bg-slate-200"
            >
              Cancel
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
