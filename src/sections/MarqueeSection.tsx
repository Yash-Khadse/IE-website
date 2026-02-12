import { Marquee } from "@/components/ui/marquee"
import { marqueeContent } from "@/data/home/marquee"

const logos = marqueeContent;

export function MarqueeSection() {
  return (
    <Marquee className="py-8 bg-white/50 backdrop-blur-sm dark:bg-transparent">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="mx-12 flex items-center justify-center"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto object-contain bg-transparent min-w-[100px] dark:brightness-0 dark:invert"
          />
        </div>
      ))}
    </Marquee>
  )
}
