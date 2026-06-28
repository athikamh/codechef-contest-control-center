"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "C++", value: 45 },
  { name: "Java", value: 25 },
  { name: "Python", value: 20 },
  { name: "C", value: 10 },
];

const COLORS = ["#f97316", "#3b82f6", "#22c55e", "#eab308"];

export default function LanguageChart() {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <CardContent className="p-6">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Language Distribution
        </h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}