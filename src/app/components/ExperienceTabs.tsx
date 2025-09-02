"use client";

import { useMemo, useState } from "react";

type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "arista-se",
    company: "Arista Networks",
    role: "Software Engineer",
    location: "Bangalore",
    period: "Jul 2024 – Aug 2025",
    bullets: [
      "Implemented role-based access control for config changes across 4.5M+ interfaces.",
      "Managed rollouts for 27 major features as part of the CloudVision release team.",
      "Reduced maintenance mode activation time by 99.7% via a new software abstraction.",
    ],
  },
  {
    id: "arista-intern",
    company: "Arista Networks",
    role: "Software Engineer Intern",
    location: "Bangalore",
    period: "May – Jul 2023, Jan – Jul 2024",
    bullets: [
      "Migrated end-to-end testing framework across 1000+ test cases and modules.",
      "Simulated data traffic across multiple datapaths to enable concurrent FE/BE development.",
      "Coordinated weekly cross-functional meetings across 6 timezones.",
    ],
  },
  {
    id: "samsung",
    company: "Samsung R&D",
    role: "Project Intern",
    location: "Remote",
    period: "Oct 2022 – Jul 2023",
    bullets: [
      "Led a 5-person team for 9 months; delivered on time.",
      "Built a simulation sandbox and network policies for non-stationary environments.",
      "Delivered a heuristic topology optimization algorithm to improve UE coverage and QoS.",
    ],
  },
];

export default function ExperienceTabs() {
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);
  const active = useMemo(() => EXPERIENCES.find((e) => e.id === activeId)!, [activeId]);

  return (
    <div className="grid gap-4 md:grid-cols-[minmax(260px,320px)_1fr]">
      {/* Tabs: horizontal scroll on mobile, vertical list on desktop */}
      <div className="md:sticky md:top-4 md:w-[300px]">
        <div className="scroll-fade flex md:flex-col overflow-x-auto md:overflow-visible gap-2 p-1 pl-3 pr-3 card no-scrollbar snap-x snap-mandatory">
          {EXPERIENCES.map((exp) => {
            const selected = exp.id === activeId;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`snap-start whitespace-nowrap md:whitespace-normal px-3 py-2 rounded-md text-xs sm:text-sm transition-colors min-w-max md:min-w-0 md:w-full text-left ${
                  selected
                    ? "bg-[color:var(--bg-2)] text-[color:var(--fg-0)] border border-[color:var(--neon-cyan)]"
                    : "text-[color:var(--fg-dim)] hover:text-[color:var(--fg-0)] border border-transparent"
                }`}
                aria-pressed={selected}
              >
                <span className="md:hidden">{exp.company}</span>
                <span className="hidden md:inline">{exp.role} — {exp.company}</span>
              </button>
            );
          })}
          <div className="shrink-0 w-3 md:hidden" />
        </div>
      </div>

      {/* Panel */}
      <div className="card p-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-semibold text-base sm:text-lg">{active.role} — {active.company}</h3>
          <span className="text-xs sm:text-sm text-[color:var(--fg-dim)]">{active.period} · {active.location}</span>
        </div>
        <ul className="mt-3 list-disc pl-5 text-[color:var(--fg-dim)] space-y-1 text-sm sm:text-base">
          {active.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


