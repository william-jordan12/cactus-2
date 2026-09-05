"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible so content is never blank, even before JS runs.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    // Only hide the element if it's below the initial viewport, so the
    // scroll-in animation is visible when the user reaches it.
    if (rect.top > window.innerHeight) {
      setVisible(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out will-change-transform ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      } ${className}`}
    >
      {children}
    </div>
  );
}