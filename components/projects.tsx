"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { ArrowLeft, ArrowRight } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"

const socialProjects = [
  {
    title: "Eye Shots.",
    category: "Agency Company",
    image: "/social/Portfolio.omar_page-0005.jpg",
  },
  {
    title: "Eye Shots.",
    category: "Agency Company",
    image: "/social/Portfolio.omar_page-0006.jpg",
  },
  {
    title: "The Certainwa",
    category: "Business Brand",
    image: "/social/Portfolio.omar_page-0007.jpg",
  },
  {
    title: "Namat",
    category: "Intesnational Company",
    image: "/social/Portfolio.omar_page-0008.jpg",
  },
  {
    title: "Unify",
    category: "System Design",
    image: "/social/Portfolio.omar_page-0010.jpg",
  },
  {
    title: "Digital Art",
    category: "Food Design",
    image: "/social/Portfolio.omar_page-0011.jpg",
  },
  {
    title: "Digital Art",
    category: "Islamic Design",
    image: "/social/Portfolio.omar_page-0012.jpg",
  },
]
const brandProjects = [
  {
    title: "Eye Shots",
    category: "Sado Company",
    image: "/brand/Portfolio.omar_page-0017.jpg",
  },
  {
    title: "Eye Shots",
    category: "Paw Casso Company",
    image: "/brand/Portfolio.omar_page-0018.jpg",
  },
  {
    title: "Eye Shots",
    category: "Unfiy Company",
    image: "/brand/Portfolio.omar_page-0019.jpg",
  },
  {
    title: "Eye Shots",
    category: "Agency Company",
    image: "/brand/Portfolio.omar_page-0016.jpg",
  },
  {
    title: "Eye Shots",
    category: "Elhijaz Restaurant",
    image: "/brand/Portfolio.omar_page-0020.jpg",
  },
  {
    title: "Eye Shots",
    category: "Chae Ayah Brand",
    image: "/brand/Portfolio.omar_page-0022.jpg",
  },
  {
    title: "Tabee Bald",
    category: "Printing Company",
    image: "/brand/Portfolio.omar_page-0009.jpg",
  },
  {
    title: "Social Design",
    category: "Islamic Design",
    image: "/brand/Portfolio.omar_page-0014.jpg",
  },
]
const illustrationProjects = [
  {
    title: "Compositing",
    category: "Digital Art",
    image: "/illustration/Portfolio.omar_page-0032.jpg",
  },
  {
    title: "Illustration",
    category: "Digital Art",
    image: "/illustration/Portfolio.omar_page-0034.jpg",
  },
  {
    title: "Illustration",
    category: "Digital Art",
    image: "/illustration/Portfolio.omar_page-0035.jpg",
  },
  {
    title: "Illustration",
    category: "Digital Art",
    image: "/illustration/Portfolio.omar_page-0039.jpg",
  },
  {
    title: "Illustration",
    category: "Digital Art",
    image: "/illustration/Portfolio.omar_page-0037.jpg",
  },
  {
    title: "Compositing",
    category: "Digital Art",
    image: "/illustration/Portfolio.omar_page-0026.jpg",
  },
  {
    title: "Illustration",
    category: "Digital Art",
    image: "/illustration/Portfolio.omar_page-0030.jpg",
  },
  {
    title: " Illustration",
    category: "Digital Art",
    image: "/illustration/Portfolio.omar_page-0031.jpg",
  },
  {
    title: "Illustration",
    category: "Digital Art",
    image: "/illustration/Portfolio.omar_page-0036.jpg",
  },
  {
    title: "Illustration",
    category: "Digital Art",
    image: "/illustration/Portfolio.omar_page-0038.jpg",
  },
]
const gridProjects = [
  {
    title: "Logos",
    category: "Branding",
    image: "/logo/Portfolio.omar_page-0028.jpg",
  },
  {
    title: "Eye Shots",
    category: "Chae Ayah Brand",
    image: "/brand/Portfolio.omar_page-0023.jpg",
  },
  {
    title: "social Designs",
    category: "Islamic Design",
    image: "/brand/Portfolio.omar_page-0013.jpg",
  },
  {
    title: "Illustration",
    category: "Digital Art",
    image: "/illustration/Portfolio.omar_page-0025.jpg",
  },
]

function ProjectCard({ title, category, image }: { title: string; category: string; image: string }) {
  return (
    <div className="group relative aspect-4/3 w-full overflow-hidden rounded-sm bg-muted">
      <Image src={image} alt={title}  fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={1} loading="lazy" />
      <div className="absolute inset-0 bg-foreground/0 transition-all duration-500 will-change-transform group-hover:bg-foreground/50 " />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h3  className="text-xl font-bold text-background sm:text-2xl"  style={{ fontFamily: "var(--font-heading)" }} >
          {title}
        </h3>
        <p className="mt-1 text-sm text-background/70">{category}</p>
      </div>
    </div>
  )
}

export function Projects() {
  const swiperRef1 = useRef<any>(null);
  const swiperRef2 = useRef<any>(null);
  const swiperRef3 = useRef<any>(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const swiperInstance = (entry.target as any).swiper;
        
        if (swiperInstance && swiperInstance.autoplay) {
          if (entry.isIntersecting) {
            swiperInstance.autoplay.start();
          } else {
            swiperInstance.autoplay.stop();
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  const swipers = document.querySelectorAll('.project-swiper');
  swipers.forEach((s) => observer.observe(s));

  return () => observer.disconnect();
}, []);


  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">Portfolio</p>
            <h2  className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"  style={{ fontFamily: "var(--font-heading)" }} >
              Selected Work
            </h2>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button onClick={() => swiperRef1.current?.slidePrev()}  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground" aria-label="Previous slide" >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button onClick={() => swiperRef1.current?.slideNext()}  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground" aria-label="Next slide" >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef1.current = swiper)}
          spaceBetween={16}
          slidesPerView={1.15}
          lazyPreloadPrevNext={2}
          watchSlidesProgress={true}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.2, spaceBetween: 24 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: true }} loop  className="w-full project-swiper"  >
          {socialProjects.map((project) => (
            <SwiperSlide key={project.title}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end my-5">
          <div className="hidden items-center gap-2 sm:flex">
            <button onClick={() => swiperRef2.current?.slidePrev()}  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground" aria-label="Previous slide" >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button onClick={() => swiperRef2.current?.slideNext()}  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground" aria-label="Next slide" >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef2.current = swiper)}
          spaceBetween={16}
          slidesPerView={1.15}
          lazyPreloadPrevNext={2}
          watchSlidesProgress={true}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.2, spaceBetween: 24 },
          }}
          autoplay={{ delay: 6000, disableOnInteraction: true }} loop  className="w-full project-swiper"  >
          {brandProjects.map((project) => (
            <SwiperSlide key={project.title}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end my-5">
          <div className="hidden items-center gap-2 sm:flex">
            <button onClick={() => swiperRef3.current?.slidePrev()}  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground" aria-label="Previous slide" >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button onClick={() => swiperRef3.current?.slideNext()}  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"   aria-label="Next slide" >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef3.current = swiper)}
          spaceBetween={16}
          slidesPerView={1.15}
          lazyPreloadPrevNext={2}
          watchSlidesProgress={true}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.2, spaceBetween: 24 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: true }} loop  className="w-full project-swiper"  >
          {illustrationProjects.map((project) => (
            <SwiperSlide key={project.title}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="mt-16">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">More Projects</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {gridProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
