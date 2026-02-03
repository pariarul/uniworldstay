'use client';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LoginModal from '@/components/layout/LoginModal';

export default function ClientLayout({ children }) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <>
            <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />
        </>
    );
}
