"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Card } from "@/components/lovable-ui/card";
import { Button } from "@/components/lovable-ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, ArrowLeft, Upload, Plus, Trash2 } from "lucide-react";
// kalau kamu sudah install "sonner", boleh pakai toast:
// import { toast } from "sonner";

export default function EquipmentRegisterPage() {
  const router = useRouter();

  const [equipmentName, setEquipmentName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [lotoPoints, setLotoPoints] = useState<string[]>([""]);

  const handleAddLotoPoint = () => {
    setLotoPoints([...lotoPoints, ""]);
  };

  const handleRemoveLotoPoint = (index: number) => {
    setLotoPoints(lotoPoints.filter((_, i) => i !== index));
  };

  const handleLotoPointChange = (index: number, value: string) => {
    const newPoints = [...lotoPoints];
    newPoints[index] = value;
    setLotoPoints(newPoints);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Contoh generate ID sederhana
    const equipmentId = `EQ-${Date.now().toString().slice(-6)}`;

    // Kalau pakai sonner:
    // toast.success(`Equipment registered successfully! ID: ${equipmentId}`);

    console.log("Registered equipment:", {
      equipmentId,
      equipmentName,
      location,
      description,
      lotoPoints,
    });

    // setelah submit, pindah ke halaman /equipment (nanti kita buat)
    router.push("/equipment");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/app">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Register Equipment
                </h1>
                <p className="text-sm text-slate-500">
                  Add new equipment to the system
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <Card className="p-6 mb-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Basic Information
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="equipmentName">Equipment Name *</Label>
                <Input
                  id="equipmentName"
                  value={equipmentName}
                  onChange={(e) => setEquipmentName(e.target.value)}
                  placeholder="e.g., Hydraulic Press #4"
                  required
                />
              </div>

              <div>
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Building A, Floor 2, Section C"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Additional details about the equipment..."
                  rows={3}
                />
              </div>
            </div>
          </Card>

          {/* Equipment Photo */}
          <Card className="p-6 mb-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Equipment Photo
            </h2>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
              <Upload className="h-12 w-12 text-slate-400 mx-auto mb-3" />
              <p className="text-sm font-medium text-slate-900 mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-slate-500">
                PNG, JPG up to 10MB (dummy only)
              </p>
            </div>
          </Card>

          {/* LOTO Points */}
          <Card className="p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                LOTO Points
              </h2>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddLotoPoint}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Point
              </Button>
            </div>

            <div className="space-y-3">
              {lotoPoints.map((point, index) => (
                <div key={index} className="flex gap-2">
                  <div className="flex-1">
                    <Input
                      value={point}
                      onChange={(e) =>
                        handleLotoPointChange(index, e.target.value)
                      }
                      placeholder="e.g., Electrical Panel A, Main Valve, Pneumatic Line"
                    />
                  </div>
                  {lotoPoints.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => handleRemoveLotoPoint(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Link href="/app" className="flex-1">
              <Button type="button" variant="outline" className="w-full">
                Cancel
              </Button>
            </Link>
            <Button type="submit" className="flex-1">
              Register Equipment
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
