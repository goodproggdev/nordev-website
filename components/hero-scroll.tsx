"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden bg-background-dark pt-20">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extralight text-frost-white tracking-tighter leading-tight">
            Sviluppo di piattaforme <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary to-aurora-cyan">
            Dati & Performance
            </span>
        </h1>
      </div>
      <ContainerScroll titleComponent={<div />}>
        <Image
          src={`/images/preventivatore.png`}
          alt="Dashboard Preview"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full w-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
