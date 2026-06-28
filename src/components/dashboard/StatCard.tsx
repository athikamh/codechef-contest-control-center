import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
  hoverClass: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  hoverClass,
}: StatCardProps) {
  return (
    <Card
      className={`border border-slate-800 bg-slate-900 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] ${hoverClass}`}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-slate-400">{title}</p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {value}
            </h2>
          </div>

          <div className={`rounded-xl p-3 ${color}`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}