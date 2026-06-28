import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-8 py-4">
      <div className="relative w-96">
        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
        <Input
          placeholder="Search participants, problems..."
          className="pl-10 bg-slate-900 border-slate-800"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="h-5 w-5 text-slate-300 hover:text-orange-500 transition-colors" />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>

          <div>
            <p className="font-medium">Athika</p>
            <p className="text-sm text-slate-400">
              Contest Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}