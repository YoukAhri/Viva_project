import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Page_main from './pages/page_main'
import About_us from './components/about_us'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Сайт  */}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s' }}>
        <Header />
        <Page_main />
        <About_us />
      </div>

      {/* Загрузчик с анимацией */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{ background: '#05050A' }}
            exit={{ 
              y: '-100%',      // Уезжает вверх
              opacity: 0,
              transition: {
                duration: 2,
                ease: [0.76, 0, 0.24, 1]  // Плавное открывание занавеса
              }
            }}
          >
            {/* Золотистый кружок */}
            <motion.div
              className="relative"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Золотистое свечение */}
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{ background: '#ffbf00' }}
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Золотистый кружок */}
              <motion.div
                className="w-20 h-20 rounded-full border-4"
                style={{ 
                  borderColor: '#ffbf00',
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
                  background: 'rgba(255, 215, 0, 0.02)'
                }}
                animate={{ rotate: 360 }}
                transition={{ rotate: { duration: 3, repeat: Infinity, ease: "linear" } }}
              />
            </motion.div>

            {/* Золотистые точки */}
            <div className="absolute bottom-20 flex gap-3">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#ffbf00', boxShadow: '0 0 6px rgba(255, 215, 0, 0.6)' }}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App