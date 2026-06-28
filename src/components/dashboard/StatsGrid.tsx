"use client";

import {
  Users,
  FileCode2,
  Activity,
  CheckCircle2,
} from "lucide-react";

import StatCard from "./StatCard";
import { useContest } from "@/context/ContestContext";

export default function StatsGrid() {
  const { participants } = useContest();

  const participantCount = participants.length;

  const accepted = participants.reduce(
    (sum, p) => sum + p.solved,
    0
  );

  const submissions = accepted * 2 + 35;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Participants"
        value={participantCount.toString()}
        icon={Users}
        color="bg-blue-500"
        hoverClass="hover:border-blue-400 hover:shadow-[0_10px_35px_rgba(59,130,246,0.25)]"
      />

      <StatCard
        title="Problems"
        value="8"
        icon={FileCode2}
        color="bg-purple-500"
        hoverClass="hover:border-purple-400 hover:shadow-[0_10px_35px_rgba(147,51,234,0.25)]"
      />

      <StatCard
        title="Live Submissions"
        value={submissions.toString()}
        icon={Activity}
        color="bg-orange-500"
        hoverClass="hover:border-orange-400 hover:shadow-[0_10px_35px_rgba(249,115,22,0.25)]"
      />

      <StatCard
        title="Accepted"
        value={accepted.toString()}
        icon={CheckCircle2}
        color="bg-emerald-500"
        hoverClass="hover:border-emerald-400 hover:shadow-[0_10px_35px_rgba(16,185,129,0.25)]"
      />
    </div>
  );
}