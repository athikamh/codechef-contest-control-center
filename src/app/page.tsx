import MainLayout from "@/components/layout/MainLayout";
import StatsGrid from "@/components/dashboard/StatsGrid";
import SubmissionChart from "@/components/dashboard/SubmissionChart";
import LanguageChart from "@/components/dashboard/LanguageChart";
import ContestStatus from "@/components/dashboard/ContestStatus";
import TopPerformers from "@/components/dashboard/TopPerformers";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            Contest Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Welcome back! Here&apos;s an overview of today&apos;s contest.
          </p>
        </div>

        {/* Stats */}
        <StatsGrid />

        {/* Submission Chart */}
        <SubmissionChart />

        {/* Middle Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <LanguageChart />
          <ContestStatus />
        </div>

        {/* Bottom Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <TopPerformers />
          <RecentActivity />
        </div>

      </div>
    </MainLayout>
  );
}