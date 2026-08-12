import { motion, useScroll, useTransform } from 'framer-motion'
import heroImage from '../images/IMG_66591.png'
import MasterCard from "../components/master_card.jsx";
import { masters } from "../data/masters.js";

function Page_main() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 500], [1, 1.6])
  const opacity = useTransform(scrollY, [0, 500], [0.1, 0.5])

  return (
    <div>
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: scale }}
        >
          <img
            src={heroImage}
            alt="Hero"
            className="h-[70vh] w-full object-cover scale-[123%] -translate-x-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60"></div>

        </motion.div>

        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: opacity }}
        /> {/* При скролле меняется непрозрачность фона в начале страницы */}
        <div className="absolute inset-0 flex flex-col items-end justify-center pr-20 gap-3">
          <h1 className="text-[2.1rem] text-right max-w-[25rem] text-[var(--text)] font-manrope font-light">
            VIVA — это место, где рождается ваша красота
          </h1>
          <p className="text-[1.1rem] text-right max-w-[26rem] text-[var(--text)] font-manrope font-light">
            Мы создаем образы, которые подчеркивают индивидуальность и дарят уверенность.
            Позвольте себе сиять каждый день вместе с VIVA.
          </p>
        </div>
      </div>

      <h1 className="text-[2.1rem] text-[var(--text_b)] font-manrope flex justify-center items-center mt-10"> Наши мастера</h1>


<div className="
  flex
  flex-col
  items-center
  gap-8
  mt-10
">

  {masters.map((master, index) => (
    <MasterCard
      key={index}
      {...master}
    />
  ))}

</div>

      
    </div>
  )
}

export default Page_main