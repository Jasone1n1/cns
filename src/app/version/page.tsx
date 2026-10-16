"use client"

import { versions } from "@/data/version"
import Image from "next/image"
import { useEffect } from "react"

export default function VersionPage() {
  useEffect(() => {
    document.title = 'Version | CASHNET USA';
  }, [])

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-lg mb-12">
        <Image
          src="/images/bg/jason-goodman-nF0nQuqBsrI-unsplash.jpg"
          alt="Version Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Version Updates</h1>
        </div>
      </section>

      {/* Ellipse background */}
      <div className="absolute right-0 top-[80vh] -z-10 w-[500px] h-[500px] rounded-full text-[#6610F2] blur-[120px] opacity-30"></div>

      {/* Content */}
      <div className="px-4 md:px-12 lg:px-24 mb-20">
        {[...versions].reverse().map((version, idx) => (
          <div key={idx} className="mb-12 border-b border-white/20 pb-8">
            <p className="text-xl font-semibold mb-2">{version.date}</p>
            <p className="text-lg font-bold text-[#6610F2]">
              {version.oldVersion} → {version.newVersion}
            </p>
            {version.content.map((item, i) => (
              <div key={i} className="mb-2">
                <span className="font-semibold">{item.label}:</span> {item.description}
              </div>
            ))}
          </div>
        ))}

      </div>
    </main>
  )
}
