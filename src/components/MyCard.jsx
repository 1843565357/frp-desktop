// MyCard.jsx
export function MyCard({ className = "", children }) {
  return (
    <div
      className={
        "rounded-[14px] border border-[rgba(17,24,39,0.06)] dark:border-[rgba(255,255,255,0.08)] " +
        "bg-white/70 dark:bg-[rgba(25,28,38,0.7)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] " +
        "backdrop-saturate-150 backdrop-blur-md " +
        className
      }
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", left, right }) {
  return (
    <div
      className={
        "px-4 py-3 border-b border-[rgba(17,24,39,0.06)] dark:border-[rgba(255,255,255,0.08)] " +
        "flex items-center justify-between gap-2 " +
        className
      }
    >
      <div className="flex items-center gap-2">{left}</div>
      <div className="flex items-center gap-2">{right}</div>
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={"px-4 py-3 " + className}>{children}</div>;
}

export function CardFooter({ className = "", children }) {
  return (
    <div
      className={
        "px-4 py-3 border-t border-[rgba(17,24,39,0.06)] dark:border-[rgba(255,255,255,0.08)] " +
        "flex items-center justify-end gap-2 " +
        className
      }
    >
      {children}
    </div>
  );
}
