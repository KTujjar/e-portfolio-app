interface TagProps {
  children: string;
}

/** Small mono chip used for project stacks and skill lists. */
export default function Tag({ children }: TagProps) {
  return (
    <span className="tag-mono rounded border border-border bg-bg px-2.5 py-1 text-fg-muted">
      {children}
    </span>
  );
}
