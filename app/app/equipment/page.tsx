"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/lovable-ui/card";
import { Button } from "@/components/lovable-ui/button";
import { Input } from "@/components/lovable-ui/input";
import { Badge } from "@/components/lovable-ui/badge";

import {
  Shield,
  ArrowLeft,
  Plus,
  Lock,
  AlertTriangle,
  CheckCircle2,
  QrCode,
  MapPin,
  Clock,
} from "lucide-react";

type EquipmentStatus = "locked" | "safe" | "maintenance";

interface Equipment {
  id: string;
  name: string;
  location: string;
  lastActivity: string;
  status: EquipmentStatus;
}

const mockEquipment: Equipment[] = [
  {
    id: "EQ-001234",
    name: "Hydraulic Press #4",
    location: "Building A, Floor 2",
    lastActivity: "2 hours ago",
    status: "locked",
  },
  {
    id: "EQ-001235",
    name: "Conveyor Belt A2",
    location: "Building A, Floor 1",
    lastActivity: "3 days ago",
    status: "safe",
  },
  {
    id: "EQ-001236",
    name: "Lathe Machine #12",
    location: "Building B, Floor 3",
    lastActivity: "1 week ago",
    status: "safe",
  },
  {
    id: "EQ-001237",
    name: "CNC Router #8",
    location: "Building A, Floor 2",
    lastActivity: "15 days ago",
    status: "maintenance",
  },
];

const statusConfig: Record<
  EquipmentStatus,
  { label: string; icon: ReactNode; className: string }
> = {
  locked: {
    label: "Locked Out",
    icon: <Lock className="h-4 w-4" />,
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
  safe: {
    label: "Operational",
    icon: <CheckCircle2 className="h-4 w-4" />,
    className: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  maintenance: {
    label: "Maintenance Due",
    icon: <AlertTriangle className="h-4 w-4" />,
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
};

export default function EquipmentListPage() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredEquipment = useMemo(() => {
    if (!search.trim()) return mockEquipment;

    const q = search.toLowerCase();

    return mockEquipment.filter(
      (eq) =>
        eq.name.toLowerCase().includes(q) ||
        eq.id.toLowerCase().includes(q) ||
        eq.location.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/app">
              <Button variant="ghost" size="icon" className="mr-1">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Equipment Catalog
                </h1>
                <p className="text-sm text-muted-foreground">
                  {filteredEquipment.length} equipment registered
                </p>
              </div>
            </div>
          </div>

          <Link href="/app/equipment/register">
            <Button size="lg" className="gap-2">
              <Plus className="h-5 w-5" />
              Add Equipment
            </Button>
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-6">
        {/* Search bar */}
        <div className="rounded-xl border bg-card px-4 py-3 shadow-sm">
          <Input
            placeholder="Search by name, location, or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-none px-0 shadow-none focus-visible:ring-0"
          />
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredEquipment.map((eq) => {
            const cfg = statusConfig[eq.status];

            return (
              <Card
                key={eq.id}
                className="flex h-full flex-col border-border bg-card shadow-sm transition hover:shadow-md"
              >
                <CardHeader className="flex flex-row items-start justify-between gap-2 pb-3">
                  <div className="space-y-1">
                    <CardTitle className="text-base font-semibold text-foreground">
                      {eq.name}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">{eq.id}</p>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full border border-border"
                  >
                    <QrCode className="h-4 w-4" />
                  </Button>
                </CardHeader>

                <CardContent className="space-y-2 pb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{eq.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Last activity {eq.lastActivity}</span>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between border-t bg-muted/40 pt-3">
                  <Badge
                    variant="outline"
                    className={`flex items-center gap-1 text-xs ${cfg.className}`}
                  >
                    {cfg.icon}
                    <span>{cfg.label}</span>
                  </Badge>

                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border"
                    onClick={() => router.push(`/app/equipment/${eq.id}`)}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
