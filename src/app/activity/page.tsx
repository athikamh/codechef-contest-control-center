import MainLayout from "@/components/layout/MainLayout";
import ActivityFeed from "@/components/activity/ActivityFeed";

export default function ActivityPage() {
  return (
    <MainLayout>
      <h1 className="text-5xl font-bold text-white">
        Activity
      </h1>

      <p className="mt-3 text-lg text-slate-400">
        View the latest contest activities in real time.
      </p>

      <ActivityFeed />
    </MainLayout>
  );
}