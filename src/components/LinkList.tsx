"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/types/link";
import { LinkCard } from "@/components/LinkCard";

export function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0])),
  );

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: { counts: Record<string, number> }) => {
        if (cancelled) return;
        setCounts((prev) => ({ ...prev, ...data.counts }));
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const handleCardClick = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST" }).catch(() => {});
  };

  return (
    <div className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          count={counts[link.id] ?? 0}
          onCardClick={() => handleCardClick(link.id)}
        />
      ))}
    </div>
  );
}
