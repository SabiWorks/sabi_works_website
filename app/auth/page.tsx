"use client";

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { useTranslation } from "@/components/i18n/useTranslation";

export default function AuthPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/15.jpg')` }}
        />
        <div className="absolute inset-0 bg-blue-900/40" />
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-200"
            >
              <span className="text-2xl animate-spin bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                ⟳
              </span>{" "}
              SabiWorks
            </Link>
            <h1 className="text-4xl font-bold mb-4">
              {t("auth_hero_title")}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              {t("auth_hero_desc")}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-3xl font-bold text-blue-800 hover:scale-105 transition-transform duration-200"
            >
              <span className="text-xl animate-spin bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                ⟳
              </span>{" "}
              SabiWorks
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {t("auth_mobile_subtitle")}
            </p>
          </div>

          {/* Auth Tabs */}
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="text-sm font-medium">
                {t("auth_sign_in_tab")}
              </TabsTrigger>
              <TabsTrigger value="register" className="text-sm font-medium">
                {t("auth_sign_up_tab")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-0">
              <LoginForm />
            </TabsContent>

            <TabsContent value="register" className="mt-0">
              <RegisterForm />
            </TabsContent>
          </Tabs>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {t("auth_back_home")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
