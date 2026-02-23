"use client";
import { RxDashboard } from "react-icons/rx";
import { FiPlusCircle, FiFileText } from "react-icons/fi";
import { LuFolderOpen } from "react-icons/lu";
import { RiAiGenerateText } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { LiaUserEditSolid } from "react-icons/lia";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <RxDashboard className="w-6 h-6 text-blue-400 " />,
  },
  {
    name: "Create",
    href: "/dashboard/create",
    icon: <FiPlusCircle className="w-6 h-6 text-blue-400 " />,
  },
  {
    name: "Projects",
    href: "/dashboard/projects",
    icon: <LuFolderOpen className="w-6 h-6 text-blue-400 " />,
  },
  {
    name: "Tempelets",
    href: "/dashboard/tempelets",
    icon: <FiFileText className="w-6 h-6 text-blue-400 " />,
  },
  {
    name: "PromptBuilder",
    href: "/dashboard/promptbuilder",
    icon: <RiAiGenerateText className="w-6 h-6 text-blue-400 " />,
  },

  {
    name: "TempeletsLibrary",
    href: "/dashboard/tempeletslibrary",
    icon: <MdOutlineLibraryBooks className="w-6 h-6 text-blue-400 " />,
  },
  {
    name: "Editor",
    href: "/dashboard/editor",
    icon: <LiaUserEditSolid className="w-6 h-6 text-blue-400 " />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <IoSettingsOutline className="w-6 h-6 text-blue-400 " />,
  },
];

function Sidebar() {
  return (
    <div>
      <aside className=" h-screen border border-base border-r-0 dark:border-gray-800 flex flex-col fixed left-0 top-0 z-30">
        {/* header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
            </div>

            <div>
              <Link href="/">
                <h1 className="text-xl font-bold ">AI Studio</h1>
              </Link>
              <p className="text-xs font-semibold text-gray-500 ">
                Content Creator
              </p>
            </div>
          </div>
        </div>

        {/* nav */}
        <nav className="flex-1 p-3">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center  px-4 py-3 rounded-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="mr-4 ">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* bottom card */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              ✨ AI Power
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Create amazing content with AI
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
