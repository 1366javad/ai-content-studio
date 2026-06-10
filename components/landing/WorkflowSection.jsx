"use client";
import { motion } from "framer-motion";
import { BarChart3, Check, FileText, Image, Search } from "lucide-react";

const campaign = [
  "Campaign-centric workspace — everything tied to your goals",
  "AI at every step, not just content generation",
  "Multi-channel ad creation in minutes",
  "Real-time analytics and AI optimisation tips",
  "Built for teams — share, collaborate, ship faster",
];
const rightStats = [
  {
    icon: Search,
    label: "Research",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    label: "Content",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Image,
    label: "Creative",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    color: "from-green-500 to-teal-500",
  },
];

function WorkflowSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
              Replace your entire
              <span className="bg-gradient-to-r from-[#3B3CFF] to-[#FF6B6B] bg-clip-text text-transparent mt-4">
                marketing stack
              </span>
            </h2>

            <p className="text-lg font-semibold mb-8 text-slate-600">
              Stop juggling a dozen disconnected tools. Marketing OS brings
              AI-powered research, content, creative, video, ads, and analytics
              into a single campaign-centric workspace.
            </p>

            <div className="space-y-4">
              {campaign.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#3B3CFF] to-[#5B5CFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base dark:text-slate-300 text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* right stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {rightStats.map(({ icon: Icon, label, color }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="p-6 rounded-2xl border flex flex-col items-center justify-center gap-3 text-center
                  dark:bg-white/[0.03] dark:border-white/[0.06] bg-white border-slate-200/60 shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center ${color}`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold dark:text-whitetext-slate-900">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WorkflowSection;
