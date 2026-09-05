"use client";

import { useState } from "react";
import Image from "next/image";
import type { LinkItem } from "@/types/link";

const cardClassName =
  "flex w-full items-center justify-center rounded-2xl border border-white/60 bg-white/40 px-5 py-3.5 text-sm font-medium text-[#3a2e26] shadow-[0_8px_20px_-10px_rgba(120,72,32,0.25)] backdrop-blur-md transition-colors duration-200 hover:bg-white/55";

export function LinkCard({ link }: { link: LinkItem }) {
  const [copied, setCopied] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);

  if (link.url.startsWith("image:")) {
    const imageSrc = link.url.slice("image:".length);

    return (
      <>
        <button
          type="button"
          onClick={() => setImageOpen(true)}
          className={cardClassName}
        >
          {link.label}
        </button>
        {imageOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm"
            onClick={() => setImageOpen(false)}
          >
            <div className="relative h-[85vh] w-[90vw] max-w-lg">
              <Image
                src={imageSrc}
                alt={link.label}
                fill
                className="rounded-2xl object-contain"
              />
            </div>
            <button
              type="button"
              onClick={() => setImageOpen(false)}
              aria-label="닫기"
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-lg text-[#3a2e26] shadow-md"
            >
              ×
            </button>
          </div>
        )}
      </>
    );
  }

  if (link.url.startsWith("mailto:")) {
    const email = link.url.slice("mailto:".length);

    const handleCopy = async () => {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };

    return (
      <button type="button" onClick={handleCopy} className={cardClassName}>
        {copied ? "복사됨!" : link.label}
      </button>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClassName}
    >
      {link.label}
    </a>
  );
}
