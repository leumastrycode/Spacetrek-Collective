export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        
        <div className="flex flex-col">
          
          <div className="font-plexMono mb-6">
            <h2 className="leading-none uppercase">
              <span className="text-[32px] tracking-tighter">
                SPACE<span className="text-[#3D2FFA]">TREK</span>
              </span>
              <span className="block text-[20px] tracking-[0.2em] mt-1">
                COLLECTIVE
              </span>
            </h2>
          </div>

          <p className="font-roboto text-[#B0BAC5] text-[20px] leading-tight max-w-[200px] mb-12">
            SpaceTrek Collective is a creative design team 
            focused on crafting distinctive and forward- 
            thinking brand identities.
          </p>
  
          <p className="font-roboto text-[#B0BAC5] text-[16px] max-w-[350px]">
            © 2026 SpaceTrek Collective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
