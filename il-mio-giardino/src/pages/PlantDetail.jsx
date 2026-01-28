import { ChevronLeft, Droplets, Sun, Wind, Scissors } from 'lucide-react';

export function PlantDetail({ plant, onBack }) {
  const selectedPlant = plant || {
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800',
    water: 'Ogni 7-10 giorni',
    light: 'Luce indiretta',
    humidity: 'Alta',
    nextWatering: 'Tra 2 giorni'
  };

  return (
    <div className='bg-white min-h-screen pb-24'>
      <div className='relative h-80'>
        <img src={selectedPlant.image} alt={selectedPlant.name} className='w-full h-full object-cover' />
        <button onClick={onBack} className='absolute top-6 left-6 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all'>
          <ChevronLeft className='w-6 h-6' />
        </button>
        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent' />
      </div>

      <div className='px-6 relative -mt-12'>
        <div className='bg-white rounded-3xl p-6 shadow-xl shadow-gray-100 border border-gray-50'>
          <h1 className='text-3xl font-bold text-gray-900'>{selectedPlant.name}</h1>
          <p className='text-gray-500 italic mt-1'>{selectedPlant.scientificName}</p>
          
          <div className='flex gap-4 mt-6'>
            <div className='flex-1 bg-blue-50 rounded-2xl p-4 flex flex-col items-center gap-2'>
              <Droplets className='w-6 h-6 text-blue-500' />
              <span className='text-xs font-bold text-blue-900'>{selectedPlant.water}</span>
            </div>
            <div className='flex-1 bg-yellow-50 rounded-2xl p-4 flex flex-col items-center gap-2'>
              <Sun className='w-6 h-6 text-yellow-500' />
              <span className='text-xs font-bold text-yellow-900'>{selectedPlant.light}</span>
            </div>
            <div className='flex-1 bg-purple-50 rounded-2xl p-4 flex flex-col items-center gap-2'>
              <Wind className='w-6 h-6 text-purple-500' />
              <span className='text-xs font-bold text-purple-900'>{selectedPlant.humidity || 'Media'}</span>
            </div>
          </div>
        </div>

        <div className='mt-8 space-y-6'>
          <div>
            <h3 className='font-bold text-gray-900 text-lg mb-4'>Prossime Cure</h3>
            <div className='bg-gray-50 rounded-2xl p-4 flex items-center justify-between border border-gray-100'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                  <Droplets className='w-5 h-5 text-blue-600' />
                </div>
                <div>
                  <p className='font-bold text-gray-900'>Annaffiatura</p>
                  <p className='text-sm text-gray-500'>{selectedPlant.nextWatering}</p>
                </div>
              </div>
              <button className='px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-200 active:scale-95 transition-all'>
                Fatto
              </button>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <button className='p-4 rounded-2xl border border-gray-100 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors'>
              <Scissors className='w-6 h-6 text-gray-400' />
              <span className='text-sm font-medium text-gray-600'>Potatura</span>
            </button>
            <button className='p-4 rounded-2xl border border-gray-100 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors'>
              <div className='w-6 h-6 text-gray-400 font-bold border-2 border-current rounded-full flex items-center justify-center text-xs'>N</div>
              <span className='text-sm font-medium text-gray-600'>Fertilizzante</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
