"use client";

import React from "react";
import { Lock } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* LEFT – Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-900 grid place-items-center text-white">
            <Lock className="h-4 w-4" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">
            GembokLOTO
          </span>
        </div>

        {/* CENTER – Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-500">
          <a href="#customize" className="hover:text-slate-900 transition">
            Customize
          </a>
          <a href="#training" className="hover:text-slate-900 transition">
            Training
          </a>
          <a href="#subscriptions" className="hover:text-slate-900 transition">
            Subscriptions
          </a>
          <a href="#resources" className="hover:text-slate-900 transition">
            Resources
          </a>
          <a href="#contact" className="hover:text-slate-900 transition">
            Contact
          </a>
        </nav>

        {/* RIGHT – Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="text-sm font-medium text-slate-600 px-4 py-2 rounded-full transition
             hover:bg-slate-900 hover:text-white"
          >
            App Login
          </a>
          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
          >
            Get Quote
          </a>
        </div>
      </Container>
    </header>
  );
}
