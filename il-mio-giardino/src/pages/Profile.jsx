import { useStore } from '../store/useStore';
import { User, Bell, Shield, LogOut } from 'lucide-react';

export function Profile() {
  const userName = useStore((state) => state.userName);
  const level = useStore((state) => state.userExperienceLevel);

  return (
    <div className='p-6 space-y-8 pb-32'>
      <header className='flex flex-col items-center space-y-4 pt-4'>
        <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl'>
          <User className='w-10 h-10 text-gray-400' />
        </div>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-800'>{userName}</h1>
          <p className='text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm inline-block mt-1'>{level}</p>
        </div>
      </header>

      <div className='space-y-4'>
        <h3 className='font-bold text-gray-900 text-lg'>Impostazioni</h3>
        
        <button className='w-full bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all'>
          <div className='w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center'>
            <Bell className='w-5 h-5 text-yellow-600' />
          </div>
          <span className='flex-1 text-left font-medium text-gray-700'>Notifiche</span>
          <div className='w-10 h-6 bg-green-500 rounded-full relative'>
            <div className='absolute right-1 top-1 w-4 h-4 bg-white rounded-full' />
          </div>
        </button>

        <button className='w-full bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all'>
          <div className='w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center'>
            <Shield className='w-5 h-5 text-purple-600' />
          </div>
          <span className='flex-1 text-left font-medium text-gray-700'>Privacy</span>
        </button>

        <button className='w-full bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all text-red-500'>
          <div className='w-10 h-10 bg-red-50 rounded-full flex items-center justify-center'>
            <LogOut className='w-5 h-5 text-red-500' />
          </div>
          <span className='flex-1 text-left font-medium'>Esci</span>
        </button>
      </div>
    </div>
  );
}
