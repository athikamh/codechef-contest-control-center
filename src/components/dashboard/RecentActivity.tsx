import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  XCircle,
  Clock3,
} from "lucide-react";

const activities = [
  {
    user: "Athika",
    problem: "Problem A",
    status: "Accepted",
    icon: CheckCircle2,
    color: "text-emerald-500",
  },
  {
    user: "Rahul",
    problem: "Problem C",
    status: "Wrong Answer",
    icon: XCircle,
    color: "text-red-500",
  },
  {
    user: "Priya",
    problem: "Problem B",
    status: "Pending",
    icon: Clock3,
    color: "text-yellow-500",
  },
];

export default function RecentActivity() {
  return (
    <Card className="rounded-2xl border border-slate-800 bg-slate-900">
      <CardHeader>
        <CardTitle className="text-white">
          Recent Activity
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl bg-slate-800 p-3"
            >
              <div className="flex items-center gap-3">
                <Icon className={`h-5 w-5 ${activity.color}`} />

                <div>
                  <p className="font-medium text-white">
                    {activity.user}
                  </p>

                  <p className="text-sm text-slate-400">
                    {activity.problem}
                  </p>
                </div>
              </div>

              <span className={`text-sm font-medium ${activity.color}`}>
                {activity.status}
              </span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}