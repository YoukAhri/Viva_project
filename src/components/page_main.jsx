import { motion, useScroll, useTransform } from 'framer-motion'
import heroImage from '../assets/IMG_66591.png'  // Положите картинку в src/assets/

function Page_main() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 500], [1, 1.6])
  const opacity = useTransform(scrollY, [0, 500], [0.3, 0.8])

  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden"> {/* Затемнение с анимацией */}
        <motion.div 
          className="absolute inset-0"
          style={{ scale: scale }}
        >
          <img
            src={heroImage}
            alt="Hero"
            className="h-full w-full object-cover"
          />
        </motion.div>
                
        <motion.div 
          className="absolute inset-0 bg-black"
          style={{ opacity: opacity }}
        /> {/* При скролле меняется непрозрачность фона в начале страницы */}
          <div className="absolute inset-0 flex items-center justify-center top-[45vh]">
            <p className="text-[1rem] text-center max-w-[30rem] text-[var(--text)] font-[var(--font-andika)]">
              VIVA — это место, где рождается ваша красота. <br />
              Мы создаем образы, которые подчеркивают индивидуальность и дарят уверенность. <br />
              Позвольте себе сиять каждый день вместе с VIVA.
            </p>
          </div>
      </div>

      <div className="bg-[rgba(60,60,60,1)] py-20">
        <div className="container mx-auto px-4">


        </div>
      </div>
    </div>
  )
}

export default Page_main