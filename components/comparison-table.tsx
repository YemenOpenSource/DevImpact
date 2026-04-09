type ScoreRow = {
  label: string;
  key: "finalScore" | "repoScore" | "prScore" | "contributionScore";
};

const rows: ScoreRow[] = [
  { label: "Final Score", key: "finalScore" },
  { label: "Repo Score", key: "repoScore" },
  { label: "PR Score", key: "prScore" },
  { label: "Contribution", key: "contributionScore" },
];

type ComparisonTableProps = {
  user1: any;
  user2: any;
};

export function ComparisonTable({ user1, user2 }: ComparisonTableProps) {
  return (
    <div className="card overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-slate-50 text-left text-xs uppercase text-slate-500">
          <tr>
            <th className="px-4 py-3">Metric</th>
            <th className="px-4 py-3">{user1.username}</th>
            <th className="px-4 py-3">{user2.username}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          {rows.map((row) => {
            const v1 = user1[row.key] ?? 0;
            const v2 = user2[row.key] ?? 0;
            const highlight1 = v1 > v2;
            const highlight2 = v2 > v1;
            return (
              <tr key={row.key}>
                <td className="px-4 py-3 font-medium text-slate-700">
                  {row.label}
                </td>
                <td
                  className={`px-4 py-3 ${
                    highlight1 ? "text-blue-600 font-semibold" : "text-slate-800"
                  }`}
                >
                  {v1.toFixed(2)}
                </td>
                <td
                  className={`px-4 py-3 ${
                    highlight2 ? "text-blue-600 font-semibold" : "text-slate-800"
                  }`}
                >
                  {v2.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
