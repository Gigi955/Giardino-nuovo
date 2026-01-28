import { useState } from 'react';
import { Search, ChevronLeft, Plus, Camera } from 'lucide-react';
import plantsData from '../data/plants.json';

export function AddPlant({ onBack, onScan }) {
  const [search, setSearch] = useState('');

  const filteredPlants = plantsData.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.scientificName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='bg-gray-50 min-h-screen'>
      <header className='bg-white p-6 shadow-sm sticky top-0 z-10'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-4'>
            <button onClick={onBack} className='p-2 hover:bg-gray-100 rounded-full'>
              <ChevronLeft className='w-6 h-6 text-gray-600' />
            </button>
            <h1 className='text-xl font-bold text-gray-800'>Nuova Pianta</h1>
          </div>
          <button onClick={onScan} className='p-2 text-primary hover:bg-primary/10 rounded-full'>
            <Camera className='w-6 h-6' />
          </button>
        </div>
        <div className='relative'>
          <Search className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
          <input
            type='text'
            placeholder='Cerca pianta...'
            className='w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <div className='p-6 grid gap-4 pb-24'>
        {filteredPlants.map(plant => (
          <div key={plant.id} className='bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-primary transition-all cursor-pointer'>
            <img src={plant.image} alt={plant.name} className='w-16 h-16 rounded-lg object-cover bg-gray-100' />
            <div className='flex-1'>
              <h3 className='font-bold text-gray-800'>{plant.name}</h3>
              <p className='text-sm text-gray-500 italic'>{plant.scientificName}</p>
            </div>
            <button className='p-2 bg-primary/10 text-primary rounded-full'>
              <Plus className='w-5 h-5' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
