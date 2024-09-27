import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "YAYASAN PERGURUAN DIPONEGORO KISARAN",
  description: "Yayasan Perguruan Diponegoro Kisaran adalah lembaga pendidikan terkemuka yang menyediakan lingkungan belajar berkualitas. Kami fokus pada pengembangan akademis dan karakter siswa melalui program inovatif dan kegiatan ekstrakurikuler. Dengan tenaga pengajar berpengalaman dan fasilitas yang memadai, kami berkomitmen untuk membekali generasi muda dengan pengetahuan dan keterampilan untuk bersaing di tingkat lokal dan global.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
