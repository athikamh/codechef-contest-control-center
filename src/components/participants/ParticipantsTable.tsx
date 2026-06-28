"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { useContest } from "@/context/ContestContext";

export default function ParticipantsTable() {
  const { participants } = useContest();
  const [search, setSearch] = useState("");

  const filteredParticipants = participants.filter((participant) =>
    participant.name.toLowerCase().includes(search.toLowerCase()) ||
    participant.college.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card className="rounded-2xl border border-slate-800 bg-slate-900">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">
            Participants
          </CardTitle>

          <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2">
            <Search className="h-4 w-4 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search participants..."
              className="bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800 text-left text-slate-400">
              <th className="pb-3">Rank</th>
              <th className="pb-3">Name</th>
              <th className="pb-3">College</th>
              <th className="pb-3">Solved</th>
              <th className="pb-3">Penalty</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredParticipants.map((participant, index) => (
              <tr
                key={participant.name}
                className="border-b border-slate-800 transition-colors hover:bg-slate-800/50"
              >
                <td className="py-4 text-white">
                  {index + 1}
                </td>

                <td className="py-4 font-medium text-white">
                  {participant.name}
                </td>

                <td className="py-4 text-slate-300">
                  {participant.college}
                </td>

                <td className="py-4 font-semibold text-blue-400">
                  {participant.solved}
                </td>

                <td className="py-4 text-white">
                  {participant.penalty}
                </td>

                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      participant.status === "Online"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {participant.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}