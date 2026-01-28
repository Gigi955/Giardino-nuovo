import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ChevronRight, Sprout, Sun, Droplets } from 'lucide-react';

export function Onboarding() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const completeOnboarding = useStore((state) => state.completeOnboarding);

  const slides = [
    {
      id: 'welcome',
      content: (
        <div className='flex flex-col items-center text-center space-y-6'>
          <div className='bg-green-100 p-6 rounded-full'>
            <Sprout className='w-12 h-12 text-primary' />
          </div>
          <h2 className='text-3xl font-bold text-gray-800'>Benvenuto nel tuo Giardino</h2>
          <p className='text-gray-600'>
            L'applicazione perfetta per gestire le tue piante, monitorare la loro crescita e imparare a curarle al meglio.
          </p>
        </div>
      )
    },
    {
      id: 'name',
      content: (
        <div className='flex flex-col items-center text-center space-y-6 w-full'>
          <div className='bg-yellow-100 p-6 rounded-full'>
            <Sun className='w-12 h-12 text-accent' />
          </div>
          <h2 className='text-2xl font-bold text-gray-800'>Come ti chiami?</h2>
          <Input
            placeholder='Il tuo nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='text-center text-lg'
          />
        </div>
      )
    },
    {
      id: 'level',
      content: (
        <div className='flex flex-col items-center text-center space-y-6 w-full'>
          <div className='bg-blue-100 p-6 rounded-full'>
            <Droplets className='w-12 h-12 text-blue-500' />
          </div>
          <h2 className='text-2xl font-bold text-gray-800'>Esperienza con le piante?</h2>
          <div className='grid grid-cols-1 gap-3 w-full'>
            {['Principiante', 'Intermedio', 'Esperto'].map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={'w-full p-4 rounded-xl border-2 transition-all ' + (level === l ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-primary/50')}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (step < slides.length - 1) {
      if (step === 1 && !name) return; // Validate name
      setStep(step + 1);
    } else {
      if (!level) return; // Validate level
      completeOnboarding(name, level);
    }
  };

  return (
    <div className='flex flex-col h-screen bg-white p-6'>
      <div className='flex-1 flex flex-col justify-center max-w-md mx-auto w-full'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {slides[step].content}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className='max-w-md mx-auto w-full pb-8'>
        <Button onClick={handleNext} className='w-full py-4 text-lg rounded-2xl'>
          {step === slides.length - 1 ? 'Inizia a Piantare!' : 'Continua'}
          {step !== slides.length - 1 && <ChevronRight className='w-5 h-5' />}
        </Button>
        
        <div className='flex justify-center gap-2 mt-6'>
          {slides.map((_, i) => (
            <div
              key={i}
              className={'h-2 rounded-full transition-all duration-300 ' + (i === step ? 'w-8 bg-primary' : 'w-2 bg-gray-200')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
