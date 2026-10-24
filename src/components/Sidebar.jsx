
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  EnvironmentOutlined,
  AlertOutlined,
  BookOutlined,
  BellOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const navItems = [
  { label: "Explore Map", href: "/dashboard", icon: EnvironmentOutlined },
  { label: "Road Reports", href: "/dashboard/reports", icon: AlertOutlined },
  { label: "Saved Routes", href: "/dashboard/saved", icon: BookOutlined },
  { label: "Notifications", href: "/dashboard/notifications", icon: BellOutlined },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-white p-5">
      <Link href="/dashboard" className="mb-10 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
          <EnvironmentOutlined />
        </span>

        <span className="text-xl font-bold tracking-tight text-slate-900">
          Bato<span className="text-blue-600">Khula</span>
        </span>
      </Link>

      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Workspace
      </p>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                active
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-slate-200 pt-5">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          <SettingOutlined />
          Settings
        </Link>

        <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
            BK
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              BatoKhula User
            </p>
            <p className="text-xs text-slate-500">Road explorer</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
