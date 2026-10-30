"use client";

import { useState, useEffect } from "react";

import {useRouter} from "next/navigation";

import {
  Layout,
  Menu,
  Avatar,
  Badge,
  Button,
  Card,
  Statistic,
  Table,
} from "antd";
import {
  DashboardOutlined,
  TeamOutlined,
  FileTextOutlined,
  EnvironmentOutlined,
  SettingOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  StarOutlined,
  QuestionCircleOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content, Footer } = Layout;

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  const router = useRouter();
  const recentUsers = [
    {
      key: "1",
      name: "Ram Sharma",
      email: "ram@example.com",
      role: "USER",
      status: "Active",
    },
    {
      key: "2",
      name: "Sita Rai",
      email: "sita@example.com",
      role: "VERIFIER",
      status: "Active",
    },
    {
      key: "3",
      name: "Hari Thapa",
      email: "hari@example.com",
      role: "USER",
      status: "Pending",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const role = user?.role;

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "users",
      icon: <TeamOutlined />,
      label: "Users",
    },
    {
      key: "reports",
      icon: <FileTextOutlined />,
      label: "Road Reports",
    },
    {
      key: "roads",
      icon: <EnvironmentOutlined />,
      label: "Roads & Routes",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "notifications",
      icon: <BellOutlined />,
      label: "Notifications",
    },
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "My Profile",
    },
    {
      key: "help",
      icon: <QuestionCircleOutlined />,
      label: "Help & Support",
    },
    {
      key: "analytics",
      icon: <BarChartOutlined />,
      label: "Analytics",
    },
  ];

  const roleMenuAccess = {
    USER: [
      "dashboard",
      "roads",
      "notifications",
      "profile",
      "settings",
      "help",
    ],
    ROAD_REPORTER: [
      "dashboard",
      "roads",
      "reports",
      "notifications",
      "profile",
      "settings",
      "help",
    ],
    VERIFIER: [
      "dashboard",
      "roads",
      "reports",
      "notifications",
      "profile",
      "settings",
      "help",
    ],
    ADMIN: [
      "dashboard",
      "users",
      "reports",
      "roads",
      "notifications",
      "profile",
      "settings",
      "help",
      "analytics",
    ],
  };

  const visibleMenuItems = menuItems.filter((item) =>
    roleMenuAccess[role]?.includes(item.key),
  );

  const groupMenuItems = [
    {
      type: "group",
      label: "MAIN",
      children: visibleMenuItems.filter((item) => item.key === "dashboard"),
    },
    {
      type: "group",
      label: "ROAD MANAGEMENT",
      children: visibleMenuItems.filter((item) =>
        ["roads", "reports"].includes(item.key),
      ),
    },
    {
      type: "group",
      label: "ADMINISTRATION",
      children: visibleMenuItems.filter((item) =>
        ["users", "analytics"].includes(item.key),
      ),
    },
    {
      type: "group",
      label: "ACCOUNT",
      children: visibleMenuItems.filter((item) =>
        ["notification", "profile", "setting", "help"].includes(item.key),
      ),
    },
  ].filter((group) => group.children.length > 0);

  const handleLogout=()=>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    router.push("/");
  }
  return (
    <Layout className="min-h-screen">
      <Header className="!fixed !inset-x-0 !top-0 !z-50 !flex !h-16 !items-center !justify-between !bg-white !px-4 !shadow-sm md:!px-6">
        <div className="flex items-center gap-2">
          <EnvironmentOutlined className="!text-2xl !text-blue-700" />
          <span className="text-lg font-bold text-slate-900">BatoKhula</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden text-sm font-medium text-slate-700 sm:block">
            {user ? ` Welcome, ${user.name}-${user.role} ` : "Welcome!"}
          </span>

          <Badge dot>
            <Button
              type="text"
              shape="circle"
              icon={<BellOutlined />}
              aria-label="Notifications"
            />
          </Badge>

          <Button
            type="text"
            shape="circle"
            icon={<UserOutlined />}
            aria-label="Profile"
          />

          <Button
            type="text"
            danger
            shape="circle"
            icon={<LogoutOutlined />}
            aria-label="Logout"
            onClick={handleLogout}
          />
        </div>
      </Header>

      <Layout className="!mt-16">
        <Sider
          width={250}
          theme="light"
          className="!fixed !bottom-0 !left-0 !top-16 !overflow-y-auto !border-r !border-slate-200"
        >
          <Menu
            mode="inline"
            selectedKeys={["dashboard"]}
            items={groupMenuItems}
            className="!border-none !pt-4"
          />
        </Sider>

        <Layout className="!ml-0 md:!ml-[250px]">
          <Content className="min-h-[calc(100vh-128px)] bg-slate-50 p-4 md:p-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <Card className="h-full rounded-xl shadow-sm">
                <Statistic
                  title="Total Users"
                  value={0}
                  prefix={<TeamOutlined />}
                />
              </Card>

              <Card className="h-full rounded-xl shadow-sm">
                <Statistic
                  title="Total Reporters"
                  value={0}
                  prefix={<UserOutlined />}
                />
              </Card>

              <Card className="h-full rounded-xl shadow-sm">
                <Statistic
                  title="Subscribed Users"
                  value={0}
                  prefix={<StarOutlined />}
                />
              </Card>

              <Card className="h-full rounded-xl shadow-sm">
                <Statistic
                  title="Total Road Reports"
                  value={0}
                  prefix={<FileTextOutlined />}
                />
              </Card>

              <Card
                title="Recently Registered Users"
                className="mt-6 rounded-xl shadow-sm"
              >
                <Table
                  columns={columns}
                  dataSource={recentUsers}
                  pagination={{ pageSize: 5 }}
                  scroll={{ x: "max-content" }}
                />
              </Card>
            </div>
          </Content>

          <Footer className="!bg-white !text-center !text-slate-500">
            BatoKhula © 2026 — Road information for everyone
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
