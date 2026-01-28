import { useStore } from '../store/useStore';

export function Dashboard({ onPlantClick }) {
  const userName = useStore((state) => state.userName);

  const myPlants = [
    { id: 1, name: 'Monstera', scientificName: 'Monstera deliciosa', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=400', status: 'In salute', water: '7 giorni', light: 'Indiretta' },
    { id: 2, name: 'Cactus', scientificName: 'Cactaceae', image: 'https://images.unsplash.com/photo-1596724857543-9563a880c1d6?auto=format&fit=crop&q=80&w=400', status: 'Sete', water: '15 giorni', light: 'Diretta' }
  ];

  return (
    <div className='p-6 space-y-6'>
      <header className='flex justify-between items-start'>
        <div>
          <h1 className='text-3xl font-bold text-gray-800'>Ciao, {userName}! </h1>
          <p className='text-gray-500'>Il tuo giardino sta bene oggi.</p>
        </div>
        <div className='bg-yellow-50 p-2 rounded-xl border border-yellow-100 flex flex-col items-center'>
          <span className='text-xl'></span>
          <span className='text-xs font-bold text-yellow-700'>24°C</span>
        </div>
      </header>

      <section className='bg-green-50 rounded-2xl p-6 border border-green-100'>
        <h2 className='text-lg font-bold text-green-900 mb-2'>Consiglio del giorno</h2>
        <p className='text-green-800 text-sm'>
          Ricordati di annaffiare le piante grasse solo quando il terreno è completamente asciutto!
        </p>
      </section>

      <section>
        <div className='flex justify-between items-end mb-4'>
          <h2 className='text-xl font-bold text-gray-800'>Le tue piante</h2>
          <button className='text-primary text-sm font-medium'>Vedi tutte</button>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {myPlants.map((plant) => (
            <div 
              key={plant.id} 
              onClick={() => onPlantClick(plant)}
              className='bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-primary/30 cursor-pointer'
            >
              <div className='w-full h-24 rounded-lg mb-3 overflow-hidden bg-gray-100 relative'>
                 <img src={plant.image} alt={plant.name} className='w-full h-full object-cover' />
                 {plant.status === 'Sete' && (
                   <div className='absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white' />
                 )}
              </div>
              <h3 className='font-bold text-gray-800'>{plant.name}</h3>
              <p className={'text-xs font-medium mt-1 ' + (plant.status === 'Sete' ? 'text-red-500' : 'text-green-600')}>{plant.status}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
