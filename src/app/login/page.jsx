
"use client";

import Link from "next/link";
import { useState } from "react";
import api from '../lib/api';
import {
  Form,
  Input,
  Button,
  Typography,
  Checkbox,
  message,
} from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  LockOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      // Login API will be connected here next.
      // console.log({
      //   email: values.email,
      //   remember: values.remember ?? false,
      // });

      const response = await api.post("/auth/login",{
        email:values.email,
        password: values.password
      })

      console.log(response.data);
    } catch {
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
            <Text className="!text-blue-100">
              YOUR JOURNEY STARTS HERE
            </Text>

            <Title
              level={1}
              className="!mt-5 !text-5xl !leading-tight !text-white"
            >
              Every journey,
              <br />
              better informed.
            </Title>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Sign in to check road conditions, see reported closures,
              and find alternative routes before you travel.
            </p>

            <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <SafetyCertificateOutlined className="mb-3 text-2xl text-blue-100" />
              <h3 className="text-lg font-semibold text-white">
                Travel with confidence
              </h3>
              <p className="mt-2 leading-6 text-blue-100">
                Stay informed about road disruptions and make smarter
                travel decisions across Nepal.
              </p>
            </div>
          </div>

          <Text className="!text-blue-200">
            Making journeys smarter, one road at a time.
          </Text>
        </div>

        {/* Login form */}
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
                Welcome back
              </Text>

              <Title level={2} className="!mb-2 !mt-3 !text-slate-900">
                Sign in to BatoKhula
              </Title>

              <Text className="text-base text-slate-500">
                Enter your details to continue your journey.
              </Text>
            </div>

            <Form
              layout="vertical"
              requiredMark={false}
              size="large"
              onFinish={handleSubmit}
              initialValues={{ remember: true }}
            >
              <Form.Item
                label="Email address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address.",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address.",
                  },
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
                  {
                    required: true,
                    message: "Please enter your password.",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="mr-2 text-slate-400" />}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
              </Form.Item>

              <div className="mb-6 flex items-center justify-between gap-3">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-blue-700 hover:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="!h-12 !rounded-xl !font-semibold"
              >
                Sign in
              </Button>
            </Form>

            <div className="mt-7 text-center text-slate-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-blue-700 hover:text-blue-500"
              >
                Create account
              </Link>
            </div>

            <p className="mt-8 text-center text-xs leading-5 text-slate-400">
              Keep your account credentials secure. BatoKhula will help you
              stay informed about road conditions and closures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
