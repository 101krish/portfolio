import React from "react";

interface TerminalProps {
  lines: string[];
}

export const TerminalOutput: React.FC<TerminalProps> = ({ lines }) => {
  return (
    <div className="bg-black text-green-500 font-mono p-4 rounded-lg border border-zinc-800 shadow-2xl text-xs">
      <div className="flex gap-1.5 mb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>
      <div className="space-y-1">
        {lines.map((line, i) => (
          <p key={i}>$ {line}</p>
        ))}
      </div>
    </div>
  );
};
