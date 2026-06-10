import { DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import { ThemeProvider } from "@/app/lib/context/ThemeProvider";
import { ThemeContextProvider } from "@/app/lib/context/ThemeContext";
import { Toaster } from "@/components/ui/toaster";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AI Marketing OS",
  description: "AI Powered Marketing Command Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className}>
        <ThemeProvider>
          <Providers>
            <ThemeContextProvider>
              {children}
              <Toaster />
            </ThemeContextProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
