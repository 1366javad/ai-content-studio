import {
  Search,
  FileText,
  Image,
  Video,
  BarChart3,
  Megaphone,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Market Research",
    description:
      "AI-powered competitor analysis, audience insights, and trend discovery to inform every campaign.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Content Hub",
    description:
      "Generate blogs, emails, social posts, and landing pages tailored to your brand voice.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Image,
    title: "Creative Studio",
    description:
      "Produce on-brand visuals, ad creatives, and design assets at scale with AI.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Video,
    title: "Video Studio",
    description:
      "Script, storyboard, and generate video content for every platform in minutes.",
    gradient: "from-pink-500 to-orange-500",
  },
  {
    icon: Megaphone,
    title: "Ad Campaigns",
    description:
      "Build and launch high-converting ad copy for Google, Meta, LinkedIn, and TikTok.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Track performance across all channels and get AI recommendations to optimise ROI.",
    gradient: "from-green-500 to-teal-500",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Every Marketing Tool,{" "}
            <span className="bg-gradient-to-r from-[#3B3CFF] to-[#FF6B6B] bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-slate-600">
            From research to results — Marketing OS covers every step of your
            campaign lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2
                  dark:bg-white/[0.02] dark:border-white/[0.06] dark:hover:bg-white/[0.04] dark:hover:border-white/[0.1]
                    bg-white border-slate-200/60 hover:border-slate-300/60 hover:shadow-xl"
            >
              <div
                className={` 
                  w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform
                  ${feature.gradient}`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-slate-900">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed dark:text-slate-400 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
