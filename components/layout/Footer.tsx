import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-24 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        
        <div className="flex flex-col">
          <div className="font-plexMono mb-10">
            <h2 className="leading-none uppercase">
              <span className="text-[32px] tracking-tighter">
                SPACE<span className="text-[#3D2FFA]">TREK</span>
              </span>
              <span className="block text-[20px] mt-1">
                COLLECTIVE
              </span>
            </h2>
          </div>
          <p className="font-roboto text-[#B0BAC5] text-[20px] leading-tight mb-12">
            SpaceTrek Collective is a creative design team focused on crafting distinctive and forward-thinking brand identities.
          </p>
          <p className="font-roboto text-[#B0BAC5] text-[16px] max-w-[350px]">
            © 2026 SpaceTrek Collective. All rights reserved.
          </p>
        </div>

       <div className="font-roboto flex flex-col space-y-4 text-[24px] md:items-center text-[#B0BAC5]">
          <div className="flex flex-col space-y-5">
            <Link href="#about" className="hover:text-[#3D2FFA] transition-colors">About Us</Link>
            <Link href="#vision" className="hover:text-[#3D2FFA] transition-colors">Vision & Mission</Link>
            <Link href="#team" className="hover:text-[#3D2FFA] transition-colors">Our Team</Link>
            <Link href="#product" className="hover:text-[#3D2FFA] transition-colors">Product</Link>
          </div>
      </div>

        <div className="flex flex-col">
          <h3 className="font-roboto text-[24px] mb-6 uppercase font-medium">
            CONTACT <span className="text-[#3D2FFA]">US</span>
          </h3>
          <div className="flex space-x-6">
            <Link href="https://github.com/leumastrycode/Spacetrek-Collective.git" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/github-1.png" alt="Github" width={32} height={32} className="hover:opacity-80 transition-opacity invert" />
            </Link>

            <Link href="https://web.facebook.com/daffa.syarif.507" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/facebook-1.png" alt="Facebook" width={32} height={32} className="hover:opacity-80 transition-opacity" />
            </Link>

            <Link href="https://www.instagram.com/ekvkaktkql/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/instagram-1.png" alt="Instagram" width={32} height={32} className="hover:opacity-80 transition-opacity" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
