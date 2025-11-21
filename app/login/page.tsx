// app/login/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: di sini nanti cek email/password ke backend
    router.push("/app"); // <-- pindah ke halaman apps
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: di sini nanti panggil API register
    router.push("/app"); // <-- setelah register juga ke apps
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Nav */}
      <header className="h-14 flex items-center px-8 border-b bg-white">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-white text-sm">🔒</span>
          </div>
          <span className="font-semibold tracking-tight">GembokLOTO</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
          {/* Tabs */}
          <div className="flex mb-6 border-b border-slate-200">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 pb-3 text-center text-sm font-medium ${
                mode === "login"
                  ? "border-b-2 border-slate-900 text-slate-900"
                  : "text-slate-400"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setMode("register")}
              className={`flex-1 pb-3 text-center text-sm font-medium ${
                mode === "register"
                  ? "border-b-2 border-slate-900 text-slate-900"
                  : "text-slate-400"
              }`}
            >
              Create Account
            </button>
          </div>

          {mode === "login" ? (
            <>
              <h1 className="text-2xl font-semibold text-center mb-1">
                Welcome Back
              </h1>
              <p className="text-center text-sm text-slate-500 mb-6">
                Sign in to your GembokLOTO account
              </p>

              {/* FORM LOGIN */}
              <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/60"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/60"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-slate-900 text-white py-2.5 text-sm font-medium hover:bg-slate-800 transition"
                >
                  Sign In
                </button>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-semibold text-center mb-1">
                Create Account
              </h1>
              <p className="text-center text-sm text-slate-500 mb-6">
                Register to start using GembokLOTO
              </p>

              {/* FORM REGISTER */}
              <form className="space-y-4" onSubmit={handleRegister}>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/60"
                    placeholder="Nama lengkap"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/60"
                    placeholder="Nama perusahaan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/60"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/60"
                    placeholder="Minimal 8 karakter"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-slate-900 text-white py-2.5 text-sm font-medium hover:bg-slate-800 transition"
                >
                  Create Account
                </button>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
