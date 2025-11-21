"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, ArrowLeft } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react"; // ✅ named export, bukan default

// ===== MOCK DATA (sementara seperti Lovable) =====
interface Equipment {
  id: string;
  name: string;
  location: string;
  status: string;
  lastActivity: string;
  lotoPoints: string[];
}

const mockEquipment: Record<string, Equipment> = {
  "EQ-001234": {
    id: "EQ-001234",
    name: "Hydraulic Press #4",
    location: "Building A, Floor 2",
    status: "Locked Out",
    lastActivity: "2 hours ago",
    lotoPoints: ["Main Breaker", "Hydraulic Supply", "Control Panel"],
  },
  "EQ-001235": {
    id: "EQ-001235",
    name: "Conveyor Belt A2",
    location: "Building A, Floor 1",
    status: "Operational",
    lastActivity: "3 days ago",
    lotoPoints: ["Power Panel", "Motor Controller", "Safety Guard"],
  },
};

export default function EquipmentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { id } = params;

  const equipment = mockEquipment[id] ?? null;
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setQrUrl(`${window.location.origin}/app/equipment/${id}`);
    }
  }, [id]);

  // Jika ID tidak ada → tampilkan error
  if (!equipment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-10 text-center">
          <div className="flex justify-center mb-4">
            <QrCode className="h-10 w-10 text-yellow-500" />
          </div>
          <h2 className="text-xl font-bold mb-2">Equipment Not Found</h2>
          <p className="text-sm text-slate-600 mb-6">
            The equipment ID could not be found in the system.
          </p>
          <Button onClick={() => router.push("/app/equipment")}>
            Back to Equipment List
          </Button>
        </Card>
      </div>
    );
  }

  // ============ UI DETAIL EQUIPMENT =============
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="p-4 bg-white border-b">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Link href="/app/equipment">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              {equipment.name}
            </h1>
            <p className="text-xs text-slate-500">
              Equipment ID: {equipment.id}
            </p>
          </div>

          <div className="ml-auto">
            <span className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-600">
              {equipment.status}
            </span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* LEFT — DETAILS */}
        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4 text-slate-900">
            Equipment Overview
          </h2>

          <p className="text-sm text-slate-600 mb-1 font-medium">📍 Location</p>
          <p className="text-slate-800 mb-4">{equipment.location}</p>

          <p className="text-sm text-slate-600 mb-1 font-medium">
            ⏱ Last Activity
          </p>
          <p className="text-slate-800 mb-4">{equipment.lastActivity}</p>

          <p className="text-sm text-slate-600 mb-2 font-medium">LOTO Points</p>
          <ul className="list-disc ml-6 space-y-1">
            {equipment.lotoPoints.map((pt, i) => (
              <li key={i} className="text-slate-800">
                {pt}
              </li>
            ))}
          </ul>
        </Card>

        {/* RIGHT — QR CODE */}
        <Card className="p-6 max-w-md w-full ml-auto flex flex-col items-center gap-4">
          <div className="text-center space-y-1">
            <QrCode className="h-7 w-7 text-slate-500 mx-auto" />
            <h2 className="text-base font-semibold text-slate-900">
              Equipment QR Code
            </h2>
            <p className="text-xs text-slate-500 max-w-xs">
              Scan this QR to open the equipment detail page on mobile.
            </p>
          </div>

          {/* QR CODE ASLI */}
          <div className="w-full flex justify-center mt-2">
            <div className="border bg-white shadow-sm p-4 rounded-xl">
              <QRCodeCanvas
                value={qrUrl || "https://example.com"} // antisipasi kalau kosong
                size={160}
                bgColor="#FFFFFF"
                fgColor="#000000"
                includeMargin={false}
              />
            </div>
          </div>

          {/* URL dalam box kecil */}
          <div className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-center text-slate-600 break-all">
            {qrUrl}
          </div>

          <div className="w-full flex flex-col gap-2 mt-2">
            <Button className="w-full">Download QR Code</Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push("/app/equipment")}
            >
              Back to Equipment List
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
