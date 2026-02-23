import Link from "next/link";
import StatCard from "@/app/_components/StatCard";
import QuickActions from "@/app/_components/QuickActions";
import ProjectCard from "../_components/ProjectCard";
import FloatingAIButton from "../_components/FloatingAIButton";

function page() {
  return (
    <div>
      <main className="flex-1 p-6  mx-auto space-y-8 ">
        <div className="flex items-center justify-between">
          {/* header */}
          <div className="flex justify-between items-center w-full">
            <div>
              <h2 className="text-2xl font-bold tracking-tight ">
                Welcome back
              </h2>
              <p className="text-sm md:text-base font-semibold mt-1 text-slate-500">
                Here&apos;s what&apos;s happening with your content today.
              </p>
            </div>

            <Link
              className="flex items-center gap-2 md:px-3 md:py-2.5 lg:mr-28 rounded-xl bg-gradient-to-r from-[#3B3CFF] to-[#5B5CFF]  text-sm md:font-semibold font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-[1px]"
              href="/dashboard/promptbuilder"
            >
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
                className="w-8 h-8 md:w-4 md:h-4"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <span className="hidden md:block"> Quick Create</span>
            </Link>
          </div>
        </div>

        {/* stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Projects"
            value="4"
            change="↑ 12% this week"
            icon={
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
                className="w-5 h-5 text-[#3B3CFF]"
              >
                {" "}
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />{" "}
                <path d="M14 2v4a2 2 0 0 0 2 2h4" /> <path d="M10 9H8" />{" "}
                <path d="M16 13H8" /> <path d="M16 17H8" />{" "}
              </svg>
            }
          />
          <StatCard
            title="Completed"
            value="3"
            change="↑ 8% this week"
            icon={
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
                className="w-5 h-5 text-[#3B3CFF]"
              >
                {" "}
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />{" "}
              </svg>
            }
          />
          <StatCard
            title="Words Generated"
            value="4,240"
            change="↑ 24% this week"
            icon={
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
                className="w-5 h-5 text-[#3B3CFF]"
              >
                {" "}
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />{" "}
                <polyline points="16 7 22 7 22 13" />{" "}
              </svg>
            }
          />
          <StatCard
            title="Templates"
            value="4"
            change="↑ 5% this week"
            icon={
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
                className="w-5 h-5 text-[#3B3CFF]"
              >
                {" "}
                <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />{" "}
                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />{" "}
                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />{" "}
              </svg>
            }
          />
        </section>

        {/* quick actions */}
        <section className="rounded-2xl border border-base shadow-lg p-6 backdrop-blur-xl">
          <h3 className="font-semibold text-sm mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickActions emoji="📝" title="Blog Post" />
            <QuickActions emoji="✉️" title="Email Copy" />
            <QuickActions emoji="📱" title="Social Media" />
            <QuickActions emoji="🛍️" title="Product Copy" />
          </div>
        </section>

        {/* recent projects */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm ">Recent Projects</h3>
            <Link
              href="/EditorWorkspace"
              className="text-base font-medium flex items-center gap-1 text-muted hover:text-slate-500"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProjectCard
              title="AI in Healthcare 2026"
              desc="Blog post exploring AI applications in healthcare"
              status="completed"
              time="7 hours ago"
            />
            <ProjectCard
              title="Product Launch Email"
              desc="5-part email sequence for new SaaS product launch"
              status="completed"
              time="Feb 15"
            />
            <ProjectCard
              title="Social Media Posts"
              desc="Series of social media posts for summer campaign"
              status="draft"
              time="Feb 15"
            />
          </div>
        </section>

        {/* floating AI button */}
        <FloatingAIButton />
      </main>
    </div>
  );
}

export default page;
