import MainLayout from "@/components/layout/MainLayout";
import SubmissionFilters from "@/components/submissions/SubmissionFilters";
import SubmissionTable from "@/components/submissions/SubmissionTable";

export default function SubmissionsPage() {
  return (
    <MainLayout>
      <h1 className="text-5xl font-bold text-white">
        Submissions
      </h1>

      <p className="mt-3 text-lg text-slate-400">
        Monitor all contest submissions in real time.
      </p>

      <SubmissionFilters />

      <SubmissionTable />
    </MainLayout>
  );
}