"use client";

import { useMemo, useState } from "react";
import { CompareForm } from "../components/compare-form";
import { ResultDashboard } from "../components/result-dashboard";
import { DashboardSkeleton } from "../components/skeletons";


type UserResult = {
  username: string;
  repoScore: number;
  prScore: number;
  contributionScore: number;
  finalScore: number;
  topRepos: { name?: string; stars?: number; score?: number }[];
  topPullRequests: { repo?: string; stars?: number; score?: number }[];
  insights?: string[];
};

type ApiResponse = {
  success: boolean;
  users?: UserResult[];
  error?: string;
};

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<{ user1: UserResult; user2: UserResult } | null>(
    null
  );

  const handleCompare = async (u1: string, u2: string) => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const params = new URLSearchParams();
      params.append("username", u1);
      params.append("username", u2);
      const res = await fetch(`/api/compare?${params.toString()}`);
      const body: ApiResponse = await res.json();
      if (!body.success || !body.users || body.users.length < 2) {
        throw new Error(body.error || "Comparison failed");
      }
      setData({ user1: body.users[0], user2: body.users[1] });
    } catch (err: any) {
      setError(err.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  const skeleton = useMemo(() => <DashboardSkeleton />, []);

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6" >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm text-slate-500">GitHub Developer Compare</p>
              <h1 className="text-3xl font-semibold text-slate-900">
               Compare two developers
              </h1>
            </div>
          </div>
     
        </div>

       
          <CompareForm
            onSubmit={handleCompare}
            loading={loading}
          />
  
        {loading && skeleton}
        {error && (
          <div className="card p-4 text-sm text-red-600 bg-red-50 border border-red-100">
            {error}
          </div>
        )}
        {data && <ResultDashboard user1={data.user1} user2={data.user2} />}
      </div>
    </main>
  );
}
