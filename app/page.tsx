"use client";

import { motion } from "framer-motion";
import {
  Lock,
  Key,
  Wrench,
  BookOpen,
  ShieldCheck,
  ChevronRight,
  CalendarDays,
  Download,
  DollarSign,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Feature } from "@/components/features/Feature";
import { Configurator } from "@/components/padlock/Configurator";
import { SubscriptionTier } from "@/components/subscription/SubscriptionTier";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary text-foreground">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl font-semibold leading-tight"
            >
              Custom Lockout Padlocks, LOTO Training, and SaaS in One Ecosystem
            </motion.h1>
            <p className="mt-4 text-muted-foreground max-w-xl">
              GembokLOTO menggabungkan gembok lockout kustom, pelatihan praktis, dan
              platform digital untuk mengelola prosedur LOTO, mesin, dan audit – cocok
              untuk SME hingga enterprise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {/* Tombol utama – hitam seperti di Lovable */}
              <a
                href="#customize"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5
                          text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition"
              >
                Build Your Padlock <ChevronRight className="h-4 w-4" />
              </a>

              {/* Tombol secondary – outline putih */}
              <a
                href="#subscriptions"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-2.5
                          text-sm font-medium text-slate-900 bg-white hover:bg-slate-50 transition"
              >
                View SaaS Plans <DollarSign className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Durable
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Standardized
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Identifiable
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Exclusive-use
              </div>
            </div>
          </div>

          <Card className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Feature
                icon={<Key className="h-5 w-5" />}
                title="KA / KD / MK"
                desc="Keying options dengan hierarki aman untuk group lockout."
              />
              <Feature
                icon={<Wrench className="h-5 w-5" />}
                title="Hardware + NFC"
                desc="Padlock, hasp, dan NFC tag terhubung ke aplikasi GembokLOTO."
              />
              <Feature
                icon={<BookOpen className="h-5 w-5" />}
                title="Digital ECP"
                desc="Energy control procedures tersimpan di cloud, accessible via mobile."
              />
            </div>
          </Card>
        </Container>
      </section>

      {/* Customize */}
      <Section
        id="customize"
        title="Customize Your Lockout Padlocks"
        subtitle="Material • Color • Shackle • Keying • Engraving – selaras dengan prinsip LOTO yang baik"
      >
        <Configurator />
        <Container className="mt-6 px-0">
          <Card className="p-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold">Policy Helper</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Setiap pilihan di atas mengikuti prinsip utama: durable, substantial,
                  standardized, identifiable, dan exclusive untuk LOTO.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Keying Matrix (MVP)</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Rencanakan kombinasi KD/KA/MK dan ekspor chart kunci sederhana untuk tim
                  maintenance.
                </p>
                <button className="mt-3 inline-flex items-center gap-2 rounded-xl border border-border px-3 py-1.5 text-sm hover:bg-secondary transition">
                  <Download className="h-4 w-4" /> Export CSV
                </button>
              </div>
              <div>
                <h4 className="font-semibold">Lead Time</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Estimasi 5–10 hari kerja untuk set dengan engraving (tergantung kuantitas
                  & kompleksitas).
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Training */}
      <Section
        id="training"
        title="Lockout/Tagout Training"
        subtitle="Hands-on, role-based, dan siap pakai di lapangan"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5" />
              <h3 className="font-semibold">LOTO 101 — Affected</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              3–4 jam. Pengenalan bahaya energi, bagaimana bersikap saat melihat lock/tag,
              dan kewajiban karyawan terdampak.
            </p>
            <div className="mt-3 text-sm">Outcome: Certificate</div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <Wrench className="h-5 w-5" />
              <h3 className="font-semibold">Authorized — Practical</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              1 hari. Identifikasi sumber energi, isolasi, aplikasi device & hasp,
              penggunaan gembok, verifikasi (test/try), dan dokumentasi.
            </p>
            <div className="mt-3 text-sm">Outcome: Assessment + Wallet Card</div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="font-semibold">Supervisor / Program Owner</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              ½ hari. Menyusun & memelihara ECP, melakukan inspeksi berkala, dan
              menindaklanjuti deviasi.
            </p>
            <div className="mt-3 text-sm">Outcome: Audit Checklist</div>
          </Card>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-xl bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition">
            Request On-Site Training
          </button>
          <button className="rounded-xl border border-border px-4 py-2 flex items-center gap-2 hover:bg-secondary transition">
            View Calendar <CalendarDays className="h-4 w-4" />
          </button>
        </div>
      </Section>

      {/* Subscriptions */}
      <Section
        id="subscriptions"
        title="SaaS Subscription Plans"
        subtitle="Pilih paket platform GembokLOTO untuk mengelola mesin, prosedur, dan aktivitas LOTO secara digital"
      >
        <p className="text-xs text-muted-foreground text-center mb-4">
          Semua paket sudah termasuk akses web + mobile. Harga di bawah hanya contoh untuk
          desain.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <SubscriptionTier
            icon={<Key className="h-5 w-5" />}
            name="Lite (SME)"
            price="$29/mo"
            tagline="Untuk workshop kecil & SME — includes App Access"
            features={[
              "Mobile app access",
              "Basic NFC scanning",
              "Up to 10 machines",
              "Basic AI procedures",
              "Email support",
            ]}
            button="Start Lite"
          />
          <SubscriptionTier
            icon={<Wrench className="h-5 w-5" />}
            name="Standard (Factory)"
            price="$79/mo"
            tagline="Untuk pabrik skala menengah"
            features={[
              "Full machine registry",
              "Standard operation dashboard",
              "WhatsApp automation",
              "AI procedure generator",
              "Audit logs",
              "Up to 50 machines",
            ]}
            button="Start Standard"
            highlighted
          />
          <SubscriptionTier
            icon={<DollarSign className="h-5 w-5" />}
            name="Enterprise"
            price="Custom"
            tagline="Untuk multi-site & enterprise"
            features={[
              "Multi-site management",
              "Custom permissions",
              "Dedicated support",
              "On-site assessment",
              "Unlimited machines",
              "Integration API",
            ]}
            button="Contact Sales"
          />
        </div>
        <p className="mt-4 text-xs text-muted-foreground text-center">
          *Nanti Anda bisa mapping ulang: per user, per mesin, atau kombinasi, sesuai
          model bisnis yang paling cocok.
        </p>
      </Section>

      {/* Resources */}
      <Section
        id="resources"
        title="Resources"
        subtitle="Template dan panduan cepat untuk tim LOTO Anda"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-5">
            <h4 className="font-semibold">Padlock Selection Guide</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Panduan memilih material, warna, shackle, dan strategi keying sesuai jenis
              industri & mesin.
            </p>
            <a
              className="mt-3 inline-flex items-center gap-2 text-sm underline hover:text-foreground"
              href="#"
            >
              Read Guide <ChevronRight className="h-4 w-4" />
            </a>
          </Card>
          <Card className="p-5">
            <h4 className="font-semibold">Energy Control Procedure (ECP)</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Template dokumen ECP yang bisa diunduh & disesuaikan untuk setiap mesin
              kritikal.
            </p>
            <a
              className="mt-3 inline-flex items-center gap-2 text-sm underline hover:text-foreground"
              href="#"
            >
              Download DOCX <Download className="h-4 w-4" />
            </a>
          </Card>
          <Card className="p-5">
            <h4 className="font-semibold">Annual Inspection Checklist</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Checklist inspeksi periodik untuk memastikan prosedur LOTO dijalankan dengan
              benar.
            </p>
            <a
              className="mt-3 inline-flex items-center gap-2 text-sm underline hover:text-foreground"
              href="#"
            >
              Download PDF <Download className="h-4 w-4" />
            </a>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get a Quote or Book Training">
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Email"
                />
                <input
                  className="rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Company"
                />
                <input
                  className="rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Phone"
                />
                <textarea
                  className="sm:col-span-2 rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                />
                <button
                  type="button"
                  className="sm:col-span-2 rounded-xl bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition"
                >
                  Submit Request
                </button>
              </form>
            </div>
            <div className="text-sm space-y-3">
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-muted-foreground">info@gembokloto.id</div>
              </div>
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-muted-foreground">+62 812 3456 7890</div>
              </div>
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-muted-foreground">+62 812 3456 7890</div>
              </div>
              <div>
                <div className="font-semibold">Office Hours</div>
                <div className="text-muted-foreground">Mon–Fri, 9 AM – 5 PM WIB</div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2024 GembokLOTO. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition">
                Contact
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
