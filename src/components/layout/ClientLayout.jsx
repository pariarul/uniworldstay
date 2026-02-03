'use client';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from './WhatsAppButton';

export default function ClientLayout({ children }) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <>
            <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
            <main className="flex-grow">
                {children}
            </main>
            <WhatsAppButton />
            <Footer />
        
        </>
    );
}
