import { motion } from 'framer-motion';
import { Sprout } from 'lucide-react';
import { useEffect } from 'react';

export function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className='fixed inset-0 bg-primary flex flex-col items-center justify-center text-white'>
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 1.5
        }}
      >
        <div className='bg-white p-6 rounded-full shadow-xl'>
          <Sprout className='w-16 h-16 text-primary' />
        </div>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className='mt-8 text-3xl font-bold tracking-tight'
      >
        Il Mio Giardino
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className='mt-2 text-primary-100'
      >
        Coltiva la tua passione
      </motion.p>
    </div>
  );
}
