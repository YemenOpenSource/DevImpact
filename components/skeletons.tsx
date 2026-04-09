export function DashboardSkeleton() {
  return (
    <div className="card p-6 animate-pulse space-y-4">
      <div className="h-5 bg-slate-200 rounded w-1/3" />
      <div className="h-4 bg-slate-200 rounded w-1/2" />
      <div className="grid gap-3 md:grid-cols-2">
        <div className="h-24 bg-slate-200 rounded-lg" />
        <div className="h-24 bg-slate-200 rounded-lg" />
      </div>
      <div className="h-64 bg-slate-200 rounded-xl" />
    </div>
  );
}
