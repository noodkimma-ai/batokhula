"use client";

import { useState } from "react";
import Link from "next/link";

// import api from "../lib/api";
import api from "../lib/api";
import { Form, Input, Select, Button, Typography, message } from "antd";
import {
  EnvironmentOutlined,
  UserOutlined,
  MailOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Password from "antd/es/input/Password";

import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const router = useRouter();

  const handleRegister = async (values) => {
    setLoading(true);

    try {
      // Registration API will be connected here next.
      // console.log({
      //   name: values.name,
      //   email: values.email,
      //   role: values.role,
      // });

      // messageApi.info(
      //   "Registration form is ready. Backend connection is the next step.",
      // );

      const response = await api.post("/auth/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      messageApi.success("Registration successfully!");

      // console.log(response.data);

      router.push(
        `/login?email=${encodeURIComponent(values.email.trim().toLowerCase())}`,
      );
    } catch (error) {
      console.error("Registration Error", error);
      console.error("Backend Response", error.response?.data);
      messageApi.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {contextHolder}

      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left branding panel */}
        <div className="relative hidden overflow-hidden bg-blue-700 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/30" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-sky-400/20" />

          <Link
            href="/"
            className="relative z-10 flex items-center gap-3 text-white"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700">
              <EnvironmentOutlined className="text-2xl" />
            </div>
            <span className="text-2xl font-bold">BatoKhula</span>
          </Link>

          <div className="relative z-10 max-w-lg">
            <Text className="!text-blue-100">SMART ROAD INFORMATION</Text>
            <Title
              level={1}
              className="!mt-5 !text-5xl !leading-tight !text-white"
            >
              Know the road.
              <br />
              Plan your journey.
            </Title>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Join BatoKhula to check road conditions, report closures, and
              discover better routes across Nepal.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Check road conditions before travelling",
                "Report road closures and disruptions",
                "Find alternative routes when roads are blocked",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>
                  <span className="text-blue-50">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Text className="!text-blue-200">
            Making journeys smarter, one road at a time.
          </Text>
        </div>

        {/* Registration form */}
        <div className="flex items-center justify-center px-5 py-10 sm:px-10">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="mb-8 flex items-center gap-2 text-xl font-bold text-blue-700 lg:hidden"
            >
              <EnvironmentOutlined />
              BatoKhula
            </Link>

            <div className="mb-8">
              <Text className="font-semibold uppercase tracking-widest text-blue-600">
                Get started
              </Text>
              <Title level={2} className="!mb-2 !mt-3 !text-slate-900">
                Create your account
              </Title>
              <Text className="text-base text-slate-500">
                Join BatoKhula and travel with better road information.
              </Text>
            </div>

            <Form
              layout="vertical"
              requiredMark={false}
              size="large"
              onFinish={handleRegister}
              initialValues={{ role: "USER" }}
              className="register-form"
            >
              <Form.Item
                label="Full name"
                name="name"
                rules={[
                  { required: true, message: "Please enter your full name." },
                  { min: 2, message: "Name must be at least 2 characters." },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="mr-2 text-slate-400" />}
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
              </Form.Item>

              <Form.Item
                label="Email address"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email." },
                  { type: "email", message: "Please enter a valid email." },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="mr-2 text-slate-400" />}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please create a password." },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters.",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined className="mr-2 text-slate-400" />}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                />
              </Form.Item>

              <Form.Item
                label="Register as"
                name="role"
                rules={[{ required: true, message: "Please select a role." }]}
                extra="Verifier access requires approval."
              >
                <Select
                  options={[
                    { value: "ADMIN", label: "ADMIN" },
                    { value: "USER", label: "Road User" },
                    {
                      value: "ROAD_REPORTER",
                      label: "Road Reporter",
                    },
                    {
                      value: "VERIFIER",
                      label: "Road Verifier — Approval Required",
                    },
                  ]}
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="!mt-2 !h-12 !rounded-xl !font-semibold"
              >
                Create account
              </Button>
            </Form>

            <div className="mt-7 text-center text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-700 hover:text-blue-500"
              >
                Sign in
              </Link>
            </div>

            <p className="mt-8 text-center text-xs leading-5 text-slate-400">
              By creating an account, you agree to use road information
              responsibly and report closures accurately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
