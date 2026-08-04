"use client"
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar'; 

export default function DashboardLayout({ 
    children 
}: { 
    children: React.ReactNode 
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


  return (
    <div className="min-h-screen bg-background-dark text-text-primary">
      
      {/* 1. SIDEBAR (LOGICA MISTA: FISSA SU DESKTOP, OVERLAY SU MOBILE) */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={closeSidebar} 
      />

      {/* 2. ICONA FLUTTUANTE (VISIBILE SOLO SU MOBILE - lg:hidden) */}
      <button 
          onClick={toggleSidebar} 
          className={`
              fixed top-4 left-4 p-4 rounded-2xl bg-primary text-white shadow-[0_0_20px_rgba(23,147,208,0.4)] z-40 
              transition-all duration-300 lg:hidden hover:scale-105 active:scale-95
              ${isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} 
          `}
          aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6" />
      </button>
      
      {/* 3. CONTENUTO PRINCIPALE (LA PAGINA) */}
      <main className="ml-0 lg:ml-64 pt-6 pb-16 transition-all duration-300 ease-in-out"> 
        {children}
      </main>
    </div>
  );
}