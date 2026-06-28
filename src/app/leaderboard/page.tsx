"use client";

import MainLayout from "@/components/layout/MainLayout";
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import { useContest } from "@/context/ContestContext";

export default function LeaderboardPage() {
  const { isFrozen, toggleFreeze } = useContest();

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-white">
              Leaderboard
            </h1>

            <p className="mt-4 text-xl text-slate-400">
              View contest rankings and participant standings.
            </p>
          </div>

          <button
            onClick={toggleFreeze}
            className={`rounded-xl px-5 py-3 font-semibold transition-all duration-200 ${
              isFrozen
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {isFrozen
              ? "🔴 Unfreeze Leaderboard"
              : "🟢 Freeze Leaderboard"}
          </button>
        </div>

        <LeaderboardTable />
      </div>
    </MainLayout>
  );
}