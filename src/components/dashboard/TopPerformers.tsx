import { Card, CardContent } from "@/components/ui/card";

const performers = [
  {
    rank: "🥇",
    name: "Athika",
    score: 800,
  },
  {
    rank: "🥈",
    name: "Rahul",
    score: 700,
  },
  {
    rank: "🥉",
    name: "Priya",
    score: 700,
  },
  {
    rank: "4",
    name: "Arjun",
    score: 600,
  },
  {
    rank: "5",
    name: "Sneha",
    score: 550,
  },
];

export default function TopPerformers() {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <CardContent className="p-6">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Top Performers
        </h2>

        <div className="space-y-4">
          {performers.map((user) => (
            <div
              key={user.name}
              className="flex items-center justify-between rounded-lg border border-slate-800 p-4 transition-all duration-200 hover:bg-slate-800/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-lg">
                  {user.rank}
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {user.name}
                  </p>

                  <p className="text-sm text-slate-400">
                    Contestant
                  </p>
                </div>
              </div>

              <span className="font-bold text-orange-400">
                {user.score}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}