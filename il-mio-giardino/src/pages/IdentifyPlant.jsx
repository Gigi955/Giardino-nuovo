import { useState, useEffect } from 'react';
import { Camera, X, Check, Loader2 } from 'lucide-react';

export function IdentifyPlant({ onBack, onIdentify }) {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setResult({
        name: 'Monstera Deliciosa',
        confidence: '98%',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=400'
      });
    }, 2000);
  };

  return (
    <div className='fixed inset-0 bg-black text-white z-50 flex flex-col'>
      <div className='p-4 flex justify-between items-center bg-black/50'>
        <button onClick={onBack} className='p-2'>
          <X className='w-6 h-6' />
        </button>
        <h2 className='font-bold'>Identifica Pianta</h2>
        <div className='w-10' />
      </div>

      <div className='flex-1 relative overflow-hidden bg-gray-900'>
        {!result ? (
          <>
            {/* Mock Camera View */}
            <img 
              src='https://images.unsplash.com/photo-1596724857543-9563a880c1d6?auto=format&fit=crop&q=80&w=800' 
              className='absolute inset-0 w-full h-full object-cover opacity-60'
              alt='Camera preview'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-64 h-64 border-2 border-white/50 rounded-lg relative'>
                <div className='absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white' />
                <div className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white' />
                <div className='absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white' />
                <div className='absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white' />
                {scanning && (
                  <div className='absolute inset-0 bg-primary/20 animate-pulse' />
                )}
              </div>
            </div>
            <div className='absolute bottom-10 left-0 right-0 flex justify-center'>
              <button 
                onClick={handleScan}
                disabled={scanning}
                className='w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform'
              >
                {scanning ? <Loader2 className='w-8 h-8 text-primary animate-spin' /> : <div className='w-12 h-12 rounded-full border-4 border-primary' />}
              </button>
            </div>
          </>
        ) : (
          <div className='absolute inset-0 bg-white text-gray-800 flex flex-col'>
            <img src={result.image} className='w-full h-1/2 object-cover' alt='Result' />
            <div className='p-6 flex-1 flex flex-col gap-4'>
              <div className='flex items-center gap-2 text-green-600 font-bold bg-green-50 self-start px-3 py-1 rounded-full'>
                <Check className='w-4 h-4' /> {result.confidence} Match
              </div>
              <h1 className='text-3xl font-bold'>{result.name}</h1>
              <p className='text-gray-600'>
                La Monstera Deliciosa è una pianta tropicale famosa per le sue grandi foglie perforate.
              </p>
              <div className='mt-auto flex gap-3'>
                <button onClick={() => setResult(null)} className='flex-1 py-3 border border-gray-200 rounded-xl font-medium'>Riprova</button>
                <button onClick={() => onIdentify(result)} className='flex-1 py-3 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/30'>Aggiungi</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
