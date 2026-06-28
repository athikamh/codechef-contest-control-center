import { Card, CardContent } from "@/components/ui/card";

export default function ContestStatus() {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <CardContent className="p-6">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Contest Status
        </h2>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Status</span>

            <span className="rounded-full bg-green-500/20 px-4 py-1 text-sm font-semibold text-green-400">
              Running
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400">Time Remaining</span>

            <span className="font-semibold text-white">
              02:15:37
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400">Participants</span>

            <span className="font-semibold text-white">
              1,248
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400">Submissions</span>

            <span className="font-semibold text-orange-400">
              5,620
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400">Problems</span>

            <span className="font-semibold text-blue-400">
              8
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}