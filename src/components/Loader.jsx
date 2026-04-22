import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{
            background: '#05050A'  // Почти черный фон
          }}
          exit={{ y: '-100%' }}
          transition={{ 
            duration: 0.8, 
            ease: [0.76, 0, 0.24, 1]  // Плавный слайдер
          }}
        >
          {/* Пульсирующий неоновый кружок */}
          <motion.div
            className="relative"
            animate={{ 
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Внешнее свечение */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{ background: '#aa3bff' }}
              animate={{ 
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.8, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Основной кружок */}
            <motion.div
              className="w-20 h-20 rounded-full border-4 border-[#aa3bff]"
              style={{ 
                boxShadow: '0 0 20px #aa3bff',
                background: 'rgba(170, 59, 255, 0.05)'
              }}
              animate={{ 
                rotate: 360,
                boxShadow: [
                  '0 0 20px #aa3bff',
                  '0 0 50px #aa3bff',
                  '0 0 20px #aa3bff'
                ]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 1.5, repeat: Infinity }
              }}
            />
          </motion.div>

          {/* Три пульсирующие точки */}
          <div className="flex gap-3 mt-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-[#aa3bff]"
                style={{ boxShadow: '0 0 8px #aa3bff' }}
                animate={{ 
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{ 
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader