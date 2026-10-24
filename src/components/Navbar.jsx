
"use client";

import { Button, Drawer } from "antd";
import {
  EnvironmentOutlined,
  MenuOutlined,
  CloseOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Explore Roads", href: "#explore" },
  { label: "Road Reports", href: "#reports" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        {/* Brand */}
        <a href="#home" className="flex shrink-0 items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-sm">
            <EnvironmentOutlined />
          </span>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            Bato<span className="text-blue-600">Khula</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="/login"
            className="px-3 py-2 text-sm font-semibold text-slate-700 transition hover:text-blue-600"
          >
            Log in
          </a>

          <Button
            type="primary"
            href="/register"
            className="!h-10 !rounded-lg !px-4 !font-medium"
          >
            Get Started <ArrowRightOutlined />
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          aria-label="Open navigation menu"
          className="sm:hidden"
          icon={<MenuOutlined />}
          onClick={() => setMenuOpen(true)}
        />

        {/* Mobile drawer */}
        <Drawer
          title={
            <span className="font-bold">
              Bato<span className="text-blue-600">Khula</span>
            </span>
          }
          placement="right"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          closeIcon={<CloseOutlined />}
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}

            <Button block href="/login">
              Log in
            </Button>

            <Button type="primary" block href="/register">
              Get Started
            </Button>
          </div>
        </Drawer>
      </nav>
    </header>
  );
}
