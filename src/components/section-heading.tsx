import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
}

export function SectionHeading({ eyebrow, title, description, id }: Props) {
  return (
    <header id={id} className="mb-10 max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span
          className="mr-2 inline-block size-1.5 translate-y-[-2px] rounded-full bg-signal"
          aria-hidden
        />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-[40px] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
