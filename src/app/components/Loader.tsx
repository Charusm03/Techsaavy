export default function Loader() {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-cyan-500/20 rounded-full animate-spin border-t-cyan-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-cyan-400 font-bold text-sm">TS</div>
          </div>
        </div>
      </div>
    );
  }
