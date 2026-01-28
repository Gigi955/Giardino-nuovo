import { Home, Search, Calendar, User } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export function BottomNav({ activeTab, onTabChange }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Cerca' },
    { id: 'calendar', icon: Calendar, label: 'Diario' },
    { id: 'profile', icon: User, label: 'Profilo' },
  ];

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 pb-6 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]'>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={twMerge(
            'flex flex-col items-center gap-1 transition-all duration-200',
            activeTab === item.id ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
          )}
        >
          <item.icon
            className={twMerge(
              'w-6 h-6 transition-transform duration-200',
              activeTab === item.id ? 'scale-110' : ''
            )}
          />
          <span className='text-[10px] font-medium'>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
