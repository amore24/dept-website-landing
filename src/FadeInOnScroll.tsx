// src/FadeInOnScroll.tsx
import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
};

export const FadeInOnScroll: React.FC<Props> = ({
  children,
  className = "",
  threshold = 0.2,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // initial hidden state
    el.classList.add("opacity-0", "translate-y-6");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(el); // animate once
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};