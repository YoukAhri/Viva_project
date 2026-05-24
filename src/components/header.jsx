import { useState, useEffect } from 'react'
import NavLink from './elements/navlink'

function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Скролл вниз - скрываем хедер
        setIsVisible(false)
      } else {
        // Скролл вверх - показываем хедер
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 z-50 w-full bg-[rgba(31,31,31,0.3)] backdrop-blur-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-center items-center" >
          <nav className="flex gap-8 font-manrope font-light">
            <NavLink href="#">Главная</NavLink>
            <NavLink href="#">Мастера</NavLink>
            <NavLink href="#">Услуги и цены</NavLink>
            <NavLink href="#">Расположение</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header