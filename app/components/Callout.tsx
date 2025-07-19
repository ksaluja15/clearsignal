// callout for the 💡 notes
export function Callout({
  emoji,
  children,
}: {
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-lg bg-gray-800 p-4">
      <div className="text-xl">{emoji}</div>
      <div className="text-gray-300">{children}</div>
    </div>
  );
}