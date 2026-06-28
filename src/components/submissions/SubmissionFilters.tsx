import { Search } from "lucide-react";

export default function SubmissionFilters() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      {/* Search */}

      <div className="relative flex-1 min-w-[260px]">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search submissions..."
          className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-orange-500 focus:outline-none"
        />
      </div>

      {/* Verdict */}

      <select className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-300 focus:border-orange-500 focus:outline-none">
        <option>All Verdicts</option>
        <option>Accepted</option>
        <option>Wrong Answer</option>
        <option>TLE</option>
        <option>Pending</option>
      </select>

      {/* Language */}

      <select className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-300 focus:border-orange-500 focus:outline-none">
        <option>All Languages</option>
        <option>C++</option>
        <option>Java</option>
        <option>Python</option>
      </select>
    </div>
  );
}