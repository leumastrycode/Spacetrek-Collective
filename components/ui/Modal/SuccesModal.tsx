'use client'

export default function SuccessModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
      <div className="glass-effect p-8 rounded-[10px] max-w-md w-full mx-4 border border-indigo-500/30 bg-neutral-900/80 text-center space-y-6 shadow-[0_0_50px_rgba(79,70,229,0.2)]">
        
        {/* Animasi Loading Canggih */}
        <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin"></div>
          <span className="text-indigo-400 font-mono text-xs">99%</span>
        </div>

        {/* Teks Status */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-wider text-indigo-400 font-mono uppercase">
            Transmission Complete
          </h3>
          <p className="text-sm text-neutral-300">
            Project blueprint has been safely uploaded to our core network.
          </p>
        </div>

        {/* Indikator Redirect */}
        <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest animate-pulse">
            Redirecting to neural_home...
        </p>
      </div>
    </div>
  )
}