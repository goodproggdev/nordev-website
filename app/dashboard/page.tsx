import DemoDashboard from '@/components/DemoDashboard'; 

export default function DashboardPage() {
  return (
    <div className="p-8 lg:p-12 min-h-[calc(100vh-theme(spacing.32))] bg-background-dark"> {/* Updated background */}
      <h1 className="text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-10">
        <span className="text-primary">Dashboard</span> Operativa
      </h1>
      <DemoDashboard />
    </div>
  );
}