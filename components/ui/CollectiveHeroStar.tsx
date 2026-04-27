import Image from "next/image";

export default function CollectiveHeroStar() {
  return (
    <div className="relative inline-flex w-full items-center justify-end">
      <div className="relative">
        <p className="font-plexMono text-gray-400 text-lg font-normal tracking-wide">
          COLLECTIVE
        </p>
        <Image
          src="/assets/tall-star.svg"
          alt="Tall Star"
          width={32}
          height={32}
          className="w-12 h-15 absolute -top-8 -right-5 bg-blend-color-dodge"
          priority
        />
      </div>
    </div>
  );
}
