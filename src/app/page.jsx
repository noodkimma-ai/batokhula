
"use client";

import Link from "next/link";
import {
  EnvironmentOutlined,
  SearchOutlined,
  SafetyOutlined,
  MenuOutlined,
  ArrowRightOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
              <EnvironmentOutlined />
            </span>
            <span className="text-xl font-bold tracking-tight">
              Bato<span className="text-blue-600">Khula</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="text-blue-600">Home</Link>
            <a href="#explore" className="transition hover:text-blue-600">
              Explore Roads
            </a>
            <a href="#features" className="transition hover:text-blue-600">
              Features
            </a>
            <a href="#about" className="transition hover:text-blue-600">
              About
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/login">
              <Button type="text" className="!font-semibold">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button type="primary" className="!h-10 !rounded-lg !px-5 !font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </nav>

        {menuOpen && (
          <div className="space-y-4 border-t border-slate-200 bg-white p-5 md:hidden">
            <a className="block" href="#explore" onClick={() => setMenuOpen(false)}>
              Explore Roads
            </a>
            <a className="block" href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <Link className="block" href="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link className="block" href="/register" onClick={() => setMenuOpen(false)}>
              Create an account
            </Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <EnvironmentOutlined />
              Smarter road information for Nepal
            </div>

            <h1 className="mt-7 max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Know the road
              <span className="block text-blue-600">before you go.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              Plan your journey with road information, route exploration,
              and community-reported updates — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/login">
                <Button
                  type="primary"
                  size="large"
                  icon={<SearchOutlined />}
                  className="!h-12 !rounded-xl !px-6 !font-semibold"
                >
                  Explore Roads
                </Button>
              </Link>

              <a href="#features">
                <Button
                  size="large"
                  className="!h-12 !rounded-xl !px-6 !font-semibold"
                >
                  Learn More
                </Button>
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <SafetyOutlined className="text-blue-600" />
                Travel with awareness
              </span>
              <span className="flex items-center gap-2">
                <EnvironmentOutlined className="text-blue-600" />
                Designed for Nepal
              </span>
            </div>
          </div>

          {/* Map-inspired preview */}
          <div id="explore" className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">
              <div className="flex items-center justify-between gap-3 px-3 py-4">
                <div>
                  <p className="text-sm font-bold">Explore Nepal</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Road map preview
                  </p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                  Map preview
                </span>
              </div>

              <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-slate-100 sm:h-[370px]">
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full border-[20px] border-white" />
                  <div className="absolute right-[8%] top-[8%] h-56 w-56 rounded-full border-[24px] border-white" />
                  <div className="absolute bottom-[-20%] left-[30%] h-64 w-64 rounded-full border-[24px] border-white" />
                  <div className="absolute left-0 top-1/2 h-2 w-full -rotate-12 bg-blue-200" />
                  <div className="absolute left-[15%] top-0 h-full w-2 rotate-12 bg-white" />
                </div>

                <div className="relative z-10 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-lg">
                  <EnvironmentOutlined className="text-3xl text-blue-600" />
                  <p className="mt-3 font-bold">Your journey starts here</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Sign in to explore the interactive map
                  </p>
                  <Link
                    href="/login"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                  >
                    Open map <ArrowRightOutlined />
                  </Link>
                </div>
              </div>

              <p className="px-2 pb-2 pt-4 text-xs leading-5 text-slate-500">
                This is a visual preview, not a live road-condition map.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            What you can do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Make every journey more informed.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Useful road tools designed to help travellers understand their
            journey before heading out.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
              <SearchOutlined />
            </div>
            <h3 className="mt-5 text-lg font-bold">Explore Routes</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Find places and explore possible journeys across Nepal.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl text-orange-600">
              <EnvironmentOutlined />
            </div>
            <h3 className="mt-5 text-lg font-bold">Road Updates</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Check reported road issues and conditions when verified
              information is available.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-xl text-green-600">
              <SafetyOutlined />
            </div>
            <h3 className="mt-5 text-lg font-bold">Community Reports</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Help other travellers by reporting road problems after signing in.
            </p>
          </article>
        </div>
      </section>

      {/* Call to action */}
      <section id="about" className="px-5 pb-16 sm:pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-blue-600 px-7 py-10 text-white sm:px-10 sm:py-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to explore with BatoKhula?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-blue-100">
              Create an account to access your dashboard and start exploring
              road information.
            </p>
          </div>
          <Link href="/register">
            <Button
              size="large"
              className="!h-12 !rounded-xl !border-0 !px-6 !font-semibold !text-blue-700"
            >
              Create Account <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="font-bold text-slate-800">
            Bato<span className="text-blue-600">Khula</span>
          </p>
          <p>Road information and journey awareness for Nepal.</p>
          <p>© {new Date().getFullYear()} BatoKhula</p>
        </div>
      </footer>
    </main>
  );
}
