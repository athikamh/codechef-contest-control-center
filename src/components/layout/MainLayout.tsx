"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import {
  LayoutDashboard,
  Users,
  Send,
  Trophy,
  Activity,
} from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Participants",
    href: "/participants",
    icon: Users,
  },
  {
    name: "Submissions",
    href: "/submissions",
    icon: Send,
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
    icon: Trophy,
  },
  {
    name: "Activity",
    href: "/activity",
    icon: Activity,
  },
];
export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen border-r border-slate-800 p-6">
          <h1 className="text-2xl font-bold text-orange-500">
            CodeChef CC
          </h1>

          <nav className="mt-10 flex flex-col gap-3">
  {navItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className={`w-full rounded-lg px-4 py-3 font-medium transition-all duration-200 ${
        pathname === item.href
          ? "bg-orange-500 text-white"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <item.icon className="h-5 w-5" />
      {item.name}
    </Link>
  ))}
</nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <Navbar />

          <main className="p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}