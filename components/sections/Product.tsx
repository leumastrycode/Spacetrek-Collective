import Image from "next/image";
import { Roboto } from 'next/font/google';

const robotoRegular = Roboto({ weight: '400', subsets: ['latin'] });
const robotoMedium = Roboto({ weight: '500', subsets: ['latin'] });

export default function Product() {
  const logoFiles = [
    "image 45.png", "image 31.png", "image 41.png", "image 44.png", "image 43.png", "image 36.png", "image 32.png", "image 40.png",
    "image 47.png", "image 33.png", "image 37.png", "image 46.png",
    "image 34.png", "image 38.png", "image 35.png", "image 39.png",
  ];

  return (
    <section id="product" className="py-20 px-6 md:px-24 bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16 text-white">
          <h2 className={`${robotoMedium.className} text-[#FFFFFF] text-[48px] leading-tight mb-0.1`}>
            Exploring Identity Through Design.
          </h2>
          <h2 className={`${robotoMedium.className} text-[#FFFFFF] text-[48px] leading-tight mb-6`}>
            Work With Us
          </h2>

          <p className={`${robotoRegular.className} text-[#B0BAC5] text-gray-400 max-w-[500px] text-[18px] leading-relaxed`}> 
            A curated collection of logo projects we've crafted, each representing a unique direction in building strong and future-ready brand identities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 mr-20">
          {logoFiles.map((fileName, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center transition-transform hover:scale-110"
            >
              <Image 
                src={`/assets/${fileName}`} 
                alt={`Logo ${index + 1}`}
                width={312} 
                height={305}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
