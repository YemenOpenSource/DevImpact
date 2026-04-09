import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

type CompareFormProps = {
  onSubmit: (u1: string, u2: string) => void;
  loading?: boolean;
};

export function CompareForm({ onSubmit, loading }: CompareFormProps) {
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");

  const canSubmit = Boolean(username1.trim() && username2.trim() && !loading);

  const handleSwap = () => {
    setUsername1(username2);
    setUsername2(username1);
  };

  const handleReset = () => {
    setUsername1("");
    setUsername2("");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    onSubmit(username1.trim(), username2.trim());
  };

  return (
    <form
      onSubmit={submit}
      className={cn(
        "card p-6 flex flex-col gap-4 animate-fadeIn bg-gradient-to-br from-white/95 via-white/85 to-slate-50",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase text-slate-500">GitHub Developer Compare</p>
          <h2 className="text-xl font-semibold text-slate-900">
            Enter two usernames
          </h2>
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={handleSwap}
          >
            Swap
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <input
          dir="ltr"
          className="h-11 rounded-lg border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent bg-white"
          placeholder={"Username 1"}
          value={username1}
          onChange={(e) => setUsername1(e.target.value)}
        />
        <input
          dir="ltr"
          className="h-11 rounded-lg border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent bg-white"
          placeholder={"Username 2"}
          value={username2}
          onChange={(e) => setUsername2(e.target.value)}
        />
      </div>

      <div className="flex gap-3 justify-end">
        <Button
          type="submit"
          disabled={!canSubmit}
          className="min-w-[140px] shadow-sm transition-transform hover:-translate-y-0.5"
        >
          {loading ? "Comparing..." : "Compare"}
        </Button>
      </div>
    </form>
  );
}
