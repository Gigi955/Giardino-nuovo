import { BottomNav } from './BottomNav';

export function Layout({ children, activeTab, onTabChange }) {
  return (
    <div className='bg-gray-50 min-h-screen pb-24'>
      <main className='max-w-md mx-auto min-h-screen bg-white shadow-xl shadow-gray-100 overflow-hidden relative'>
        {children}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
