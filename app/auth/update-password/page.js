import { Lock, ArrowRight } from "lucide-react";
import { updatePassword } from "@/app/actions/auth";

export default function UpdatePasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-8 space-y-6 transition-colors">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Set new password
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Please enter your new secure password below.
            </p>
          </div>

          {/* Form */}
          <form action={updatePassword} className="space-y-5">
            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">
                New Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />

                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition active:scale-[0.98]"
            >
              Update Password
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
