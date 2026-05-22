import Sidebar from "@/components/layout/Sidebar";
import SearchBar from "../../components/dashboard/SearchBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen ">
      <div className="hidden md:block w-72 shrink-0 border-r border-base ">
        <Sidebar />
      </div>

      <div className=" flex flex-col flex-1 min-w-0">
        <SearchBar />
        <main className="flex-1 overflow-y-auto px-6 lg:py-8  ">
          <div className=" mx-auto w-full max-w-screen-2xl space-y-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
