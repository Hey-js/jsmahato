import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function PageShell({ eyebrow, title, intro, children, className = "" }: Props) {
  return (
    <div className={`container-prose py-16 sm:py-24 ${className}`.trim()}>
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </div>
      <div className="mt-16">{children}</div>
    </div>
  );
}
