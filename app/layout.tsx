import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/shared/Header";
import LoggedInHeader from "@/components/shared/LoggedInHeader";
import validateUser from "@/lib/actions/auth";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await validateUser();
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground p-10 flex flex-col min-h-screen justify-between">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            {user.data.user ? <LoggedInHeader /> : <Header />}
            {children}
          </div>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
