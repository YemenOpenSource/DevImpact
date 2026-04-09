type Props = {
  insights: string[];
  title?: string;
};

export function InsightsList({ insights, title = "Insights" }: Props) {
  if (!insights?.length) return null;
  return (
    <div className="card p-4">
      <h3 className="text-sm font-semibold text-slate-800 mb-2">{title}</h3>
      <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
        {insights.map((insight, idx) => (
          <li key={idx}>{insight}</li>
        ))}
      </ul>
    </div>
  );
}
