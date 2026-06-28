"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";

const data = [
  { time: "10:00", submissions: 45 },
  { time: "10:30", submissions: 82 },
  { time: "11:00", submissions: 120 },
  { time: "11:30", submissions: 168 },
  { time: "12:00", submissions: 220 },
  { time: "12:30", submissions: 270 },
  { time: "1:00", submissions: 330 },
];

export default function SubmissionChart() {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <CardContent className="p-6">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Submission Trend
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="submissions"
                stroke="#f97316"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}