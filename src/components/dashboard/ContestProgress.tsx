import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export default function ContestProgress() {
  return (
    <Card className="rounded-2xl border border-slate-800 bg-slate-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Trophy className="h-5 w-5 text-orange-500" />
          Contest Progress
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">
          <div>
            <div className="mb-2 flex justify-between text-sm text-slate-400">
              <span>Contest Completion</span>
              <span>76%</span>
            </div>

            <div className="h-3 w-full rounded-full bg-slate-800">
              <div className="h-3 w-[76%] rounded-full bg-orange-500 transition-all duration-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-2xl font-bold text-white">02:13:44</p>
              <p className="text-sm text-slate-400">Time Remaining</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-2xl font-bold text-white">8 / 10</p>
              <p className="text-sm text-slate-400">Problems Active</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
)
}