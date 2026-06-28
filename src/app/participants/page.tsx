import MainLayout from "@/components/layout/MainLayout";
import ParticipantsTable from "@/components/participants/ParticipantsTable";

export default function ParticipantsPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Participants
          </h1>

          <p className="mt-2 text-slate-400">
            Manage contest participants and monitor their progress.
          </p>
        </div>

        <ParticipantsTable />
      </div>
    </MainLayout>
  );
}