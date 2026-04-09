type RepoItem = { name?: string; stars?: number; forks?: number; score?: number };
type PRItem = { repo?: string; stars?: number; score?: number };

type Props = {
  title: string;
  items: (RepoItem | PRItem)[];
  variant: "repo" | "pr";
};

export function TopList({ title, items, variant }: Props) {
  return (
    <div className="card p-4">
      <h3 className="text-sm font-semibold text-slate-800 mb-3">{title}</h3>
      <div className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-sm border border-slate-100 rounded-lg px-3 py-2"
          >
            <div>
              <p className="font-medium text-slate-900">
                {variant === "repo" ? (item as RepoItem).name : (item as PRItem).repo}
              </p>
              <p className="text-xs text-slate-500 flex gap-3">
                <span>⭐ {item.stars ?? "—"}</span>
                {variant === "repo" && (
                  <span>🍴 {(item as RepoItem).forks ?? "—"}</span>
                )}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-900">
                {(item.score ?? 0).toFixed(2)}
              </p>
              <p className="text-[11px] text-slate-500">Score</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
