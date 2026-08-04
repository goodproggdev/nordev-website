"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart, Globe, Briefcase, ChevronRight, X } from 'lucide-react'; 

interface SidebarProps {
  isOpen: boolean; 
  onClose: () => void; 
}

const navItems = [
  { href: '/dashboard', label: 'Vendite', icon: BarChart }, 
  { href: '/dashboard/web-analytics', label: 'Campagne Web / Visite', icon: Globe },
  { href: '/dashboard/gestionale', label: 'Gestionale (ERP/CRM)', icon: Briefcase },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) { 
  const pathname = usePathname();

  return (
    <>
      {/* 1. Overlay scuro (visibile SOLO su mobile quando il menu è aperto - lg:hidden) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" 
          onClick={onClose} 
        ></div>
      )}

      {/* 2. Sidebar Principale */}
      <div 
        className={`
          fixed top-0 left-0 w-64 h-full bg-surface/80 backdrop-blur-xl border-r border-white/10 shadow-xl z-50 
          transition-transform duration-300 ease-in-out
          
          // LOGICA MOBILE: Nascosta/mostrata in overlay
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          
          // LOGICA DESKTOP: Sempre visibile e fissa, ignorando la traslazione mobile
          lg:translate-x-0 lg:block lg:z-30 
        `}
      >
        
        {/* Intestazione del pannello Admin */}
        <div className="p-4 border-b border-white/10 pt-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h2 className="font-extrabold text-xl text-primary tracking-tight">Admin Panel</h2>
          </div>
          {/* Pulsante di chiusura (visibile SOLO su mobile - lg:hidden) */}
          <button onClick={onClose} className="text-text-muted hover:text-primary p-1 rounded-md transition-colors duration-200">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigazione */}
        <nav className="flex flex-col space-y-2 p-4 mt-4">
          <div className="font-semibold text-xs uppercase text-text-muted tracking-widest mb-2 ml-2">Sezioni</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/dashboard' && pathname === '/dashboard');
            const Icon = item.icon;
            return (
             <Link 
               key={item.href} 
               href={item.href} 
               onClick={() => { if (isOpen) onClose(); }} 
               className={`flex items-center justify-between p-3 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(23,147,208,0.3)] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(23,147,208,0.5)]' 
                  : 'text-text-secondary hover:bg-white/5 hover:text-primary hover:scale-[1.01]' 
              }`}>
                <div className="flex items-center space-x-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-primary/70'}`} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-white' : 'text-text-muted'}`} />
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}