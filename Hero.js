"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const RubikCube = dynamic(() => import("./RubikCube"), { ssr: false });

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-8">
      <h1 className="text-5xl font-bold">Jabir Salehin</h1>

      <div className="relative w-[300px] h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <Image src="/images/jabir.jpg" alt="jabir" fill className="object-cover" />
      </div>

      <RubikCube />
    </section>
  );
}
