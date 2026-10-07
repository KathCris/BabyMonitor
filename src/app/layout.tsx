import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthPage from "../features/auth/page";
// import { NextIntlClientProvider } from 'next-intl';
// import { getLocale, getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BabyMonitor",
  description: "BabyMonitor - Monitoramento de Bebês",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // const locale = await getLocale();
  // const messages = await getMessages();

  return (
    // <html lang={locale} className="notranslate" translate="no">

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
        <AuthPage />
        {children}
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
