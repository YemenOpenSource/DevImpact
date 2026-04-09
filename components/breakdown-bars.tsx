type Props = {
  user: any;
};

const items = [
  { key: "repoScore", label: "Repos", color: "bg-blue-500" },
  { key: "prScore", label: "Pull Requests", color: "bg-purple-500" },
  { key: "contributionScore", label: "Activity", color: "bg-emerald-500" },
];

export function BreakdownBars({ user }: Props) {
  const max = Math.max(
    user.repoScore ?? 0,
    user.prScore ?? 0,
    user.contributionScore ?? 0,
    1
  );

  return (
    <div className="card p-4">
      <h3 className="text-sm font-semibold text-slate-800 mb-3">
        Breakdown — {user.username}
      </h3>
      <div className="flex flex-col gap-3">
        {items.map((item) => {
          const val = user[item.key] ?? 0;
          const pct = Math.min(100, Math.round((val / max) * 100));
          return (
            <div key={item.key} className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>{item.label}</span>
                <span>{val.toFixed(2)}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
