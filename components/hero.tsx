import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Graphic Designer
        </p>
        <h1
          className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Omar Hassan
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Crafting visual identities and editorial experiences that communicate
          with clarity and purpose.
        </p>
      </div>

      <a
        href="#work"
        className="absolute bottom-12 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to work section"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Selected Work</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
