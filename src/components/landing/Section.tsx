import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, details, icon, image, links, isActive, showButton, buttonText }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex items-center overflow-hidden">

      {/* Правая картинка */}
      {image && (
        <motion.div
          className="hidden md:block absolute right-0 top-0 w-1/2 h-full"
          initial={{ opacity: 0, x: 80 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </motion.div>
      )}

      {/* Левая колонка */}
      <div className="relative z-20 flex flex-col justify-center p-8 md:p-16 lg:p-24 w-full md:w-[55%]">
        {icon && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="w-16 h-16 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center">
              <Icon name={icon} size={32} className="text-[#FF4D00]" />
            </div>
          </motion.div>
        )}
        {subtitle && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight max-w-xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {content && (
          <motion.p
            className="text-lg md:text-xl max-w-lg mt-6 text-neutral-400"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}
        {details && (
          <motion.p
            className="text-sm md:text-base max-w-lg mt-4 text-neutral-500 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {details}
          </motion.p>
        )}
        {links && links.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-neutral-300 text-sm hover:border-[#FF4D00]/60 hover:text-white hover:bg-[#FF4D00]/10 transition-all"
              >
                <Icon name="ExternalLink" size={13} className="text-[#FF4D00]" />
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 md:mt-14"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
              onClick={() => window.open('https://docs.google.com/document/d/1TZ1A_VuirwSFBymN_jV3g7IJcNDaaxvO/edit?usp=sharing&ouid=106771337967678137066&rtpof=true&sd=true', '_blank')}
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}