import { ArrowUpRight } from "lucide-react"

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/art_omar_hassan?igsh=aWdlcXZkc3FtaDRi" },
  { name: "Behance", href: "https://www.behance.net/omarh_art_works" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/omar-hassan-374582229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Whatsapp", href: "https://wa.me/201148456683" },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {"Let\u2019s work together"}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"Have a project in mind? I\u2019d love to hear about it. Reach out and let\u2019s create something beautiful together."}
          </p>

          <a
            href="mailto:Omar.hartist2@gmail.com"
            className="group mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 text-lg font-medium text-foreground transition-all hover:gap-3"
          >
            Omar.hartist2@gmail.com
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <div className="mt-12 flex items-center justify-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Abdelrhman Mohamed. All rights reserved."}
        </p>
        <p className="text-sm text-muted-foreground">
          Designed with intention.
        </p>
      </div>
    </footer>
  )
}
