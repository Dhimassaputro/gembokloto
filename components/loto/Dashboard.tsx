"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Plus,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Clock,
  List,
} from "lucide-react";
import Link from "next/link";

interface StatusCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  variant: "safe" | "caution" | "danger";
}

const StatusCard = ({ title, count, icon, variant }: StatusCardProps) => {
  const bgColors = {
    safe: "bg-emerald-50",
    caution: "bg-amber-50",
    danger: "bg-red-50",
  };

  const textColors = {
    safe: "text-emerald-600",
    caution: "text-amber-600",
    danger: "text-red-600",
  };

  return (
    <Card className={`p-6 border-0 ${bgColors[variant]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium mb-1 ${textColors[variant]}`}>
            {title}
          </p>
          <p className={`text-3xl font-bold ${textColors[variant]}`}>{count}</p>
        </div>
        <div className={textColors[variant]}>{icon}</div>
      </div>
    </Card>
  );
};

export default function Dashboard() {
  const [activeLockouts] = useState(3);
  const [safeEquipment] = useState(12);
  const [needsAttention] = useState(2);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  LOTO Safety Manager
                </h1>
                <p className="text-sm text-slate-500">
                  Equipment Lockout Control System
                </p>
              </div>
            </div>
            <Button
              size="lg"
              className="gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
            >
              <Plus className="h-5 w-5" />
              New Lockout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatusCard
            title="Active Lockouts"
            count={activeLockouts}
            variant="danger"
            icon={<Lock className="h-8 w-8 text-red-600" />}
          />
          <StatusCard
            title="Operational Equipment"
            count={safeEquipment}
            variant="safe"
            icon={<CheckCircle2 className="h-8 w-8 text-emerald-600" />}
          />
          <StatusCard
            title="Needs Attention"
            count={needsAttention}
            variant="caution"
            icon={<AlertTriangle className="h-8 w-8 text-amber-600" />}
          />
        </div>

        {/* Quick Actions */}
        <Card className="p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Register Equipment */}
            <Link href="/app/equipment/register">
              <Button
                variant="outline"
                className="w-full h-auto py-4 flex-col gap-2 
                  hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                <Plus className="h-6 w-6" />
                <span>Register Equipment</span>
              </Button>
            </Link>

            {/* View Equipment */}
            <Link href="/app/equipment">
              <Button
                variant="outline"
                className="w-full h-auto py-4 flex-col gap-2 
                  hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                <List className="h-6 w-6" />
                <span>View Equipment</span>
              </Button>
            </Link>

            {/* Issue Lockout */}
            <Button
              variant="outline"
              className="w-full h-auto py-4 flex-col gap-2 
                hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              <Lock className="h-6 w-6" />
              <span>Issue Lockout</span>
            </Button>

            {/* View History */}
            <Button
              variant="outline"
              className="w-full h-auto py-4 flex-col gap-2 
                hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              <Clock className="h-6 w-6" />
              <span>View History</span>
            </Button>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b">
              <div className="bg-red-50 p-3 rounded-lg">
                <Lock className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900">
                  Lockout Issued - Hydraulic Press #4
                </p>
                <p className="text-sm text-slate-500">
                  John Smith • 15 minutes ago
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-600">
                Active
              </span>
            </div>

            <div className="flex items-center gap-4 pb-4 border-b">
              <div className="bg-emerald-50 p-3 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900">
                  Lockout Released - Conveyor Belt A2
                </p>
                <p className="text-sm text-slate-500">
                  Maria Garcia • 1 hour ago
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">
                Completed
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Plus className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900">
                  New Equipment Added - Lathe Machine #12
                </p>
                <p className="text-sm text-slate-500">
                  David Chen • 3 hours ago
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                New
              </span>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
