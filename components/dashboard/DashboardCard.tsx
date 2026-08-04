import { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: ReactNode;
}

export default function DashboardCard({ title, value, description, icon }: DashboardCardProps) {
  return (
    <div className="bg-surface/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out hover:shadow-primary/15 hover:border-primary/30">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider">{title}</h3>
        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
            {icon}
        </div> 
      </div>
      <p className="text-4xl font-extrabold text-text-primary mb-2 tracking-tight">{value}</p>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}