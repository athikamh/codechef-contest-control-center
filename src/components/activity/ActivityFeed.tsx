import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    user: "Athika",
    action: "Solved Problem A",
    status: "Accepted",
    time: "2 mins ago",
  },
  {
    user: "Rahul",
    action: "Submitted Problem C",
    status: "Wrong Answer",
    time: "4 mins ago",
  },
  {
    user: "Priya",
    action: "Solved Problem B",
    status: "Accepted",
    time: "7 mins ago",
  },
  {
    user: "Arjun",
    action: "Submitted Problem D",
    status: "Runtime Error",
    time: "9 mins ago",
  },
  {
    user: "Sneha",
    action: "Solved Problem A",
    status: "Accepted",
    time: "12 mins ago",
  },
];

export default function ActivityFeed() {
  return (
    <Card className="mt-10 border-slate-800 bg-slate-900">
      <CardContent className="p-6">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Recent Activity
        </h2>

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/30 p-5 transition-all duration-200 hover:bg-slate-800/60"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-lg ${
                    activity.status === "Accepted"
                      ? "bg-green-500/20"
                      : activity.status === "Wrong Answer"
                      ? "bg-red-500/20"
                      : "bg-yellow-500/20"
                  }`}
                >
                  {activity.status === "Accepted"
                    ? "✅"
                    : activity.status === "Wrong Answer"
                    ? "❌"
                    : "⚠️"}
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {activity.user}
                  </p>

                  <p className="text-slate-400">
                    {activity.action}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    activity.status === "Accepted"
                      ? "bg-green-500/20 text-green-400"
                      : activity.status === "Wrong Answer"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {activity.status}
                </span>

                <p className="mt-2 text-sm text-slate-500">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}