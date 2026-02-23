import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t py-12 px-6 border-base">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B3CFF] to-[#7B5CFF] flex items-center justify-center">
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
              <span className="text-lg font-bold ">AI Content Studio</span>
            </div>
            <p className="text-base font-bold text-slate-600">
              Create, edit, and manage AI-generated content with ease.
            </p>
          </div>

          {/* product */}
          <div>
            <h4 className="font-semibold mb-4 ">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm font-bold transition-colors text-slate-600 "
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-bold transition-colors text-slate-600 "
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-bold transition-colors text-slate-600 "
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm  font-bold transition-colors text-slate-600"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* company */}
          <div>
            <h4 className="font-semibold mb-4 ">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors text-slate-600 font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors text-slate-600 font-bold"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors text-slate-600 font-bold"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors text-slate-600 font-bold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* legal */}
          <div>
            <h4 className="font-semibold mb-4 ">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors text-slate-600 font-bold"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors text-slate-600 font-bold"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors text-slate-600 font-bold"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors text-slate-600 font-bold"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-base border-base text-slate-400">
          © 2026 AI Content Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
