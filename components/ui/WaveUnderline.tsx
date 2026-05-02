export default function WaveUnderline() {
  return (
    <span
      className="absolute bottom-0 left-0 w-full h-[12px] overflow-hidden 
                 translate-y-full group-hover:translate-y-0 
                 transition-transform duration-400 ease-out group-hover:delay-75"
    >
      {/* layer 1 */}
      <svg
        viewBox="0 0 1200 40"
        className="w-[200%] h-full 
               group-hover:animate-wave-x"
      >
        <path
          d="M0,30 C100,5 200,55 300,30 C400,5 500,55 600,30 C700,5 800,55 900,30 C1000,5 1100,55 1200,30"
          stroke="rgb(99 102 241)"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>

      {/* layer 2 */}
      <svg
        viewBox="0 0 1200 40"
        className="absolute top-0 w-[200%] h-full opacity-80 
               group-hover:animate-wave-x-reverse"
      >
        <path
          d="M0,34 C100,15 200,50 300,34 C400,15 500,50 600,34 C700,15 800,50 900,34 C1000,15 1100,50 1200,34"
          stroke="rgb(99 102 241)"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </span>
  );
}
