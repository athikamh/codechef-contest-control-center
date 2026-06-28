"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useContest } from "@/context/ContestContext";

export default function LeaderboardTable() {
  const {
    leaderboard,
    rejudge,
    isFrozen,
  } = useContest();

  return (
    <Card className="mt-10 border-slate-800 bg-slate-900">
      <CardContent className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">
            Contest Rankings
          </h2>

          {isFrozen && (
            <span className="rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-400">
              ❄️ Leaderboard Frozen
            </span>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-slate-800 text-slate-400">
              <tr>
                <th className="py-4 text-left">Rank</th>
                <th className="py-4 text-left">Name</th>
                <th className="py-4 text-left">College</th>
                <th className="py-4 text-left">Solved</th>
                <th className="py-4 text-left">Penalty</th>
                <th className="py-4 text-left">Score</th>
                <th className="py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {leaderboard.map((user, index) => (
                <tr
                  key={user.name}
                  className={`border-b border-slate-800 transition-all duration-200 hover:bg-slate-700/30 ${
                    index === 0
                      ? "bg-yellow-500/10"
                      : index === 1
                      ? "bg-slate-300/10"
                      : index === 2
                      ? "bg-orange-500/10"
                      : ""
                  }`}
                >
                  <td className="py-6 text-xl">
                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : index + 1}
                  </td>

                  <td className="font-semibold text-white">
                    {user.name}
                  </td>

                  <td className="text-slate-300">
                    {user.college}
                  </td>

                  <td className="font-semibold text-blue-400">
                    {user.solved}
                  </td>

                  <td className="text-slate-200">
                    {user.penalty}
                  </td>

                  <td className="font-bold text-orange-400">
                    {user.score}
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => rejudge(user.name)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                      Rejudge
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}