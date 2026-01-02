import { RiCopyrightLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="relative py-3 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
          <RiCopyrightLine className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          <span className="font-medium">2025 by</span>

          {/* CraftXR with gradient */}
          <span className="font-bold bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent cursor-default relative group">
            CraftXR
          </span>
        </div>
      </div>
    </footer>
  );
}