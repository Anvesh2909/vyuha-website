import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: 'Vyuha | Innovation Foundation',
    description: 'Empowering innovations through collaboration and action.',
    icons: { icon: '/logo.png' },
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-[#0c0c0c] text-white font-outfit relative overflow-x-hidden">

        {/* 🔥 Orange Accent Gradient Blobs - Shared Site-Wide */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute w-[600px] h-[600px] top-[-100px] left-[-150px] bg-orange-500 opacity-30 rounded-full mix-blend-overlay blur-3xl animate-pulse z-0" />
            <div className="absolute w-[400px] h-[400px] bottom-[-100px] right-[-150px] bg-orange-500 opacity-30 rounded-full mix-blend-overlay blur-2xl animate-pulse z-0" />

        </div>

        {/* 🔗 Core Layout */}
        <div className="relative z-10 flex flex-col min-h-screen">
            {/* Navbar */}
            <header className="w-full">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                    <Navbar />
                </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto sm:px-10 pt-16 md:pt-10">
            {children}
            </main>

            {/* Footer */}
            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
        </body>
        </html>
    );
}
