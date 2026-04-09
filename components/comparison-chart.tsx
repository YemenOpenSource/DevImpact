import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  user1: any;
  user2: any;
};

const metrics = [
  { key: "repoScore", label: "Repos" },
  { key: "prScore", label: "PRs" },
  { key: "contributionScore", label: "Activity" },
];

export function ComparisonChart({ user1, user2 }: Props) {
  const data = metrics.map((m) => ({
    name: m.label,
    [user1.username]: user1[m.key] ?? 0,
    [user2.username]: user2[m.key] ?? 0,
  }));

  return (
    <div className="card p-4 h-80 bg-gradient-to-br from-white to-slate-50">
      <h3 className="text-sm font-semibold text-slate-800 mb-3">
        Score Comparison
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0" }}
          />
          <Bar dataKey={user1.username} fill="#3b82f6" radius={[8, 8, 0, 0]} />
          <Bar dataKey={user2.username} fill="#a855f7" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
