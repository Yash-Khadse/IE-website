import { Marquee } from "@/components/ui/marquee"

const logos = [
  {
    src: "https://res.cloudinary.com/dr32w1unf/image/upload/e_make_transparent:20/v1770733187/CompQsoft_1_1_xjjdxm.png",
    alt: "CompQsoft",
  },
  {
    src: "https://res.cloudinary.com/dr32w1unf/image/upload/e_make_transparent:20/v1770733187/Vector_x9lrdr.png",
    alt: "Vector Logo",
  },
  {
    src: "https://res.cloudinary.com/dr32w1unf/image/upload/e_make_transparent:20/v1770733186/Group_100_frqulk.png",
    alt: "Group 100",
  },
  {
    src: "https://res.cloudinary.com/dr32w1unf/image/upload/e_make_transparent:20/v1770733186/Union_myzbuf.png",
    alt: "Union",
  },
  {
    src: "https://res.cloudinary.com/dr32w1unf/image/upload/e_make_transparent:20/v1770733187/Group_79_qwuibg.png", 
    alt: "Group 79",
  }
]

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
