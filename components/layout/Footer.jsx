import Link from "next/link";
import Logo from "../landing/Logo";

function Footer() {
  return (
    <footer className="border-t py-12 px-6 border-base">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo />
            </div>
            <p className="text-base font-bold text-slate-600">
              Create, edit, and manage AI-generated marketing with ease.
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
          © 2026 Marketing OS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
