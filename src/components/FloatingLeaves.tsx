"use client";

import { useEffect, useState } from "react";

interface Leaf {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
  size: number;
  opacity: number;
  type: "leaf" | "circle" | "dot";
}

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const generated: Leaf[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 15}s`,
      animationDuration: `${15 + Math.random() * 10}s`,
      size: 8 + Math.random() * 16,
      opacity: 0.15 + Math.random() * 0.25,
      type: (["leaf", "circle", "dot"] as const)[Math.floor(Math.random() * 3)],
    }));
    setLeaves(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: leaf.left,
            top: "-20px",
            animationDelay: leaf.animationDelay,
            animationDuration: leaf.animationDuration,
            animationName:
              leaf.type === "leaf"
                ? "leafFall"
                : leaf.type === "circle"
                ? "leafFall2"
                : "leafFall3",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {leaf.type === "leaf" ? (
            <svg
              width={leaf.size}
              height={leaf.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{ opacity: leaf.opacity }}
            >
              <path
                d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75"
                stroke="#355E3B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="rgba(168, 213, 186, 0.3)"
              />
            </svg>
          ) : leaf.type === "circle" ? (
            <div
              className="rounded-full bg-accent"
              style={{
                width: leaf.size * 0.5,
                height: leaf.size * 0.5,
                opacity: leaf.opacity * 0.5,
              }}
            />
          ) : (
            <div
              className="rounded-full bg-secondary"
              style={{
                width: leaf.size * 0.3,
                height: leaf.size * 0.3,
                opacity: leaf.opacity * 0.4,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
