import Image from "next/image"

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5 lg:gap-20 lg:px-8">
        <div className="lg:col-span-2">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            About
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A little about me
          </h2>
          <div className="relative mt-8 aspect-[3/4] w-full max-w-xs overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/omar-hassan.jpg"
              alt="Omar Hassan, graphic designer"
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-3">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {
              "I'm Omar Hassan, a graphic designer based in Cairo with a passion for visual storytelling. I specialize in brand identity, editorial design, and packaging \u2014 always striving for clarity and elegance in every detail."
            }
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {
              "With over three years of experience, I\u2019ve had the privilege of working with brands across fashion, hospitality, and technology. My approach is rooted in simplicity \u2014 creating designs that feel timeless rather than trendy."
            }
          </p>
          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-border pt-10">
            <div>
              <p
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                3+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <p
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                80+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <p
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                30+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
