import { motion, useScroll, useTransform } from 'framer-motion'
import heroImage from '/images/IMG_66591.png'
import MasterCard from "../components/master_card.jsx";
import { masters } from "../data/masters.js";
import leafIcon from "../images/ico/лист.png";
import productsIcon from "../images/ico/средства.png";
import clockIcon from "../images/ico/часы.png";
import heartIcon from "../images/ico/сердце.png";


function Page_main() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 500], [1, 1.6])
  const opacity = useTransform(scrollY, [0, 500], [0.1, 0.5])

  return (
    <div>
      {/* Начало блока волн */}
      <div className="relative bg-[#fffafa]">
        <div className="min-h-[1200px]">


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

              <button href="#" className=' rounded-full bg-[#e3c199] px-6 py-2 text-xl transition-all duration-300 hover:text-[#fff1e7] hover:bg-white/40 backdrop-blur-md' >
                <span className="-translate-y-[1px]"> Записаться </span>
              </button>

            </div>
          </div>

          {/* Блок с картиночками вступительными */}
          <div className='flex justify-center align-items gap-[5vw] pt-10 text-center'>

            <div className='flex flex-col max-w-[13vw] items-center'>
              <img src={leafIcon} alt="" className='max-w-[64px]' />
              <span className='text-xl font-medium m-3'>Индивидуальный подход</span>
              <span className='text-base m-1'>Подбираем уход и процедуры специально для вас</span>
            </div>

            <div className='flex flex-col max-w-[13vw] items-center'>
              <img src={productsIcon} alt="" className='max-w-[64px]' />
              <span className='text-xl font-medium m-3' >Качественные материалы</span>
              <span className='text-base m-1'>Используем только проверенные средства</span>
            </div>

            <div className='flex flex-col max-w-[13vw] items-center'>
              <img src={clockIcon} alt="" className='max-w-[64px]' />
              <span className='text-xl font-medium m-3'>Опытные мастера</span>
              <span className='text-base m-1'>Наша команда - это профессионалы с любовью к своему делу</span>
            </div>

            <div className='flex flex-col max-w-[13vw] items-center'>
              <img src={heartIcon} alt="" className='max-w-[64px]' />
              <span className='text-xl font-medium m-3'>Атмосфера заботы</span>
              <span className='text-base m-1'>Уют, комфорт и понимание в каждой детали</span>
            </div>

          </div>
        </div>

        {/* Сами волны */}
        <svg className="absolute bottom-0 left-0 h-[220px] w-full" viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path d="M0 110 C180 210 350 20 570 100 C800 190 950 30 1160 120 C1280 170 1360 80 1440 100 V220 H0Z" fill="#e7ded3" opacity="0.35" />
        </svg>

        <svg className="absolute bottom-0 left-0 h-[170px] w-full" viewBox="0 0 1440 170" preserveAspectRatio="none">
          <path d="M0 90 C220 20 380 160 600 80 C820 10 1000 150 1190 70 C1300 25 1370 100 1440 60 V170 H0Z" fill="#e7ded3" opacity="0.55" />
        </svg>

        <svg className="absolute bottom-0 left-0 h-[120px] w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 70 C180 120 330 20 520 65 C720 115 850 35 1050 75 C1220 110 1330 30 1440 65 V120 H0Z" fill="#e7ded3" />
        </svg>
      </div>

      <section className="bg-[#e7ded3]">
        
        
      <div className="flex flex-col pl-[8vw] ">
        <span className='text-[1rem] text-left text-[var(--text_b)] font-manrope font-light'>О нас</span>
        <span className='text-[1.7rem] text-left text-[var(--text_b)] font-manrope font-light pt-4 pb-4'>Красота начинается с заботы о себе</span>

        <span className='text-[1.1rem] text-left text-[var(--text_b)] font-manrope font-light max-w-[20vw] leading-relaxed'>Вива - это не просто салон красоты, это пространство где ваше тело получает должны уход и внимание, а каждая ваша деталь учитывается для получения идеального результата.</span>
        
      </div> 
      <button href="#" className=' ml-[8vw] mt-4 rounded-full bg-[#e3c199] px-8 py-4 text-xl transition-all duration-300 hover:text-[#fff1e7] hover:bg-white/40 backdrop-blur-md' >
          <span className="-translate-y-[1px]"> Подробнее о нас </span>
        </button>



     
      </section>










  <h1 className="text-[2.1rem] text-[var(--text_b)] font-manrope flex justify-center items-center pt-10"> Наши мастера</h1>
        <div className="flex flex-col items-center gap-8 mt-10">
          {masters.map((master, index) => (
            <MasterCard key={index} {...master} /> ))}
        </div>

     








    </div>
  )
}

export default Page_main