import { ComparisonTable } from "./comparison-table";
import { ComparisonChart } from "./comparison-chart";
import { BreakdownBars } from "./breakdown-bars";
import { TopList } from "./top-list";
import { InsightsList } from "./insights-list";
import { ScoreCard } from "./score-card";

type UserResult = {
  username: string;
  repoScore: number;
  prScore: number;
  contributionScore: number;
  finalScore: number;
  topRepos: { name?: string; stars?: number; forks?: number; score?: number }[];
  topPullRequests: { repo?: string; stars?: number; score?: number }[];
  insights?: string[];
};

type Props = {
  user1: UserResult;
  user2: UserResult;
};

export function ResultDashboard({ user1, user2 }: Props) {
  const winner =
    user1.finalScore === user2.finalScore
      ? null
      : user1.finalScore > user2.finalScore
        ? user1
        : user2;
  const loser = winner === user1 ? user2 : user1;
  const diffPct = winner
    ? Math.round(((winner.finalScore - loser.finalScore) / loser.finalScore) * 100)
    : 0;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Winner banner */}
      <div className="card p-6 flex flex-col gap-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg">
        {winner ? (
          <>
            <p className="text-sm text-white/80">Metric</p>
            <h2 className="text-2xl font-semibold">
              🏆 {winner.username} wins
            </h2>
            <p className="text-sm text-white/80">
              {diffPct}%
              higher final score than
              {
                loser.username
              }
            </p>
          </>
        ) : (
          <>
            <p className="text-sm text-white/80">Metric</p>
            <h2 className="text-xl font-semibold">It's a tie — both developers are evenly matched.</h2>
          </>
        )}
      </div>

      {/* Score cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <ScoreCard
          title={user1.username}
          value={user1.finalScore}
          highlight={winner?.username === user1.username}
          subtitle="Final score"
        />
        <ScoreCard
          title={user2.username}
          value={user2.finalScore}
          highlight={winner?.username === user2.username}
          subtitle="Final score"
        />
        <ScoreCard title="Repo diff" value={user1.repoScore - user2.repoScore} />
        <ScoreCard title="PR diff" value={user1.prScore - user2.prScore} />
      </div>

      <ComparisonTable user1={user1} user2={user2} />

      <ComparisonChart user1={user1} user2={user2} />

      <div className="grid gap-4 md:grid-cols-2">
        <BreakdownBars user={user1} />
        <BreakdownBars user={user2} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <TopList
          title={`${user1.username} — Top repos`}
          items={user1.topRepos || []}
          variant="repo"
        />
        <TopList
          title={`${user2.username} — Top repos`}
          items={user2.topRepos || []}
          variant="repo"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <TopList
          title={`${user1.username} — Top PRs`}
          items={user1.topPullRequests || []}
          variant="pr"
        />
        <TopList
          title={`${user2.username} — Top PRs`}
          items={user2.topPullRequests || []}
          variant="pr"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <InsightsList
          title={`${user1.username} insights`}
          insights={user1.insights || []}
        />
        <InsightsList
          title={`${user2.username} insights`}
          insights={user2.insights || []}
        />
      </div>
    </div>
  );
}
