import { Card, CardContent } from "@/components/ui/card";

const submissions = [
  {
    id: 10231,
    participant: "Athika",
    problem: "A",
    language: "C++",
    verdict: "Accepted",
    time: "10:32 AM",
  },
  {
    id: 10232,
    participant: "Rahul",
    problem: "C",
    language: "Java",
    verdict: "Wrong Answer",
    time: "10:34 AM",
  },
  {
    id: 10233,
    participant: "Priya",
    problem: "B",
    language: "Python",
    verdict: "Accepted",
    time: "10:36 AM",
  },
  {
    id: 10234,
    participant: "Arjun",
    problem: "D",
    language: "C",
    verdict: "Runtime Error",
    time: "10:39 AM",
  },
  {
    id: 10235,
    participant: "Sneha",
    problem: "A",
    language: "JavaScript",
    verdict: "Accepted",
    time: "10:41 AM",
  },
];

export default function SubmissionTable() {
  return (
    <Card className="mt-8 border-slate-800 bg-slate-900">
      <CardContent className="p-6">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Live Submissions
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-slate-800 text-slate-400">
              <tr>
                <th className="py-4 text-left">ID</th>
                <th className="py-4 text-left">Participant</th>
                <th className="py-4 text-left">Problem</th>
                <th className="py-4 text-left">Language</th>
                <th className="py-4 text-left">Verdict</th>
                <th className="py-4 text-left">Time</th>
              </tr>
            </thead>

            <tbody>
              {submissions.map((submission) => (
                <tr
                  key={submission.id}
                  className="border-b border-slate-800 transition-all duration-200 hover:bg-slate-800/40"
                >
                  <td className="py-5 text-slate-300">{submission.id}</td>

                  <td className="font-semibold text-white">
                    {submission.participant}
                  </td>

                  <td className="text-orange-400 font-medium">
                    {submission.problem}
                  </td>

                  <td className="text-slate-300">
                    {submission.language}
                  </td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        submission.verdict === "Accepted"
                          ? "bg-green-500/20 text-green-400"
                          : submission.verdict === "Wrong Answer"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {submission.verdict}
                    </span>
                  </td>

                  <td className="text-slate-400">{submission.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}